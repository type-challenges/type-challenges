import path from 'node:path'
import process from 'node:process'
import crypto from 'node:crypto'
import fs from 'fs-extra'
import c from 'ansis'
import prompts from 'prompts'
import { formatToCode } from './actions/utils/formatToCode'
import { loadQuizzes, resolveInfo } from './loader'
import { supportedLocales } from './locales'
import { getQuestionFullName } from './actions/issue-pr'
import type { QuizMetaInfo } from './types'

type Snapshot = Record<string, string>

function calculateFileHash(filePathFull: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha1')
    const fileStream = fs.createReadStream(filePathFull)

    fileStream.on('data', (data) => {
      hash.update(data)
    })

    fileStream.on('end', () => {
      hash.update(filePathFull)
      resolve(hash.digest('hex'))
    })

    fileStream.on('error', (err) => {
      reject(err)
    })
  })
}

async function takeSnapshot(quizzesPath: string) {
  let snapshot: Snapshot = {}

  const files = fs.readdirSync(quizzesPath)

  for (const file of files) {
    // Might be a file, or a folder
    const fPath = path.join(quizzesPath, file)
    const fStats = fs.statSync(fPath)

    if (fStats.isDirectory()) {
      snapshot = {
        ...snapshot,
        ...(await takeSnapshot(fPath)),
      }
    }
    else {
      snapshot[file] = await calculateFileHash(fPath)
    }
  }

  return snapshot
}

function readPlaygroundCache(playgroundCachePath: string): Snapshot {
  if (!fs.existsSync(playgroundCachePath))
    return {}

  try {
    const rawCacheContent = fs.readFileSync(playgroundCachePath)
    return JSON.parse(rawCacheContent.toString())
  }
  catch (err) {
    console.log(c.red('Playground cache corrupted. '
    + 'Cannot generate playground without keeping your changes intact'))
    console.log(c.cyan('Please ensure you have run this: "pnpm generate"'))
    process.exit(1)
  }
}

function calculateOverridableFiles(cache: Snapshot, snapshot: Snapshot) {
  const result: Snapshot = {}

  for (const quizName in snapshot) {
    if (snapshot[quizName] === cache[quizName])
      result[quizName] = snapshot[quizName]
  }

  return result
}

function isQuizWritable(quizFileName: string, overridableFiles: Snapshot, playgroundSnapshot: Snapshot): boolean {
  return !!(
    overridableFiles[quizFileName]
    || (!overridableFiles[quizFileName] && !playgroundSnapshot[quizFileName])
  )
}

async function generatePlayground() {
  const playgroundPath = path.join(__dirname, '../playground')
  const playgroundCachePath = path.join(__dirname, '../.playgroundcache')

  let locale = supportedLocales.find(locale => locale === process.argv[2])!

  console.log(c.bold.cyan('Generating local playground...\n'))

  let overridableFiles: Snapshot
  let keepChanges = false
  const currentPlaygroundCache = readPlaygroundCache(playgroundCachePath)
  let playgroundSnapshot: Snapshot

  if (process.argv.length === 3 && (process.argv[2] === '--keep-changes' || process.argv[2] === '-K')) {
    console.log(c.bold.cyan('We will keep your changes while generating.\n'))
    keepChanges = true

    playgroundSnapshot = await takeSnapshot(playgroundPath)

    overridableFiles = calculateOverridableFiles(currentPlaygroundCache, playgroundSnapshot)
  }
  else if (fs.existsSync(playgroundPath)) {
    const result = await prompts([{
      name: 'confirm',
      type: 'confirm',
      initial: false,
      message: 'The playground directory already exists, it may contains the answers you did. Do you want to override it?',
    }])
    if (!result?.confirm)
      return console.log(c.yellow('Skipped.'))
  }

  if (!locale) {
    const result = await prompts([{
      name: 'locale',
      type: 'select',
      message: 'Select language:',
      choices: supportedLocales.map(i => ({
        title: i,
        value: i,
      })),
    }])
    if (!result)
      return console.log(c.yellow('Skipped.'))
    locale = result.locale
  }

  if (!keepChanges) {
    await fs.remove(playgroundPath)
    await fs.ensureDir(playgroundPath)
  }

  const quizzes = await loadQuizzes()
  const incomingQuizzesCache: Snapshot = {}

  for (const quiz of quizzes) {
    const { difficulty, title } = resolveInfo(quiz, locale) as QuizMetaInfo & { difficulty: string }
    const code = formatToCode(quiz, locale)

    if (difficulty === undefined || title === undefined) {
      console.log(c.yellow`${quiz.no} has no ${locale.toUpperCase()} version. Skipping`)
      continue
    }

    const quizzesPathByDifficulty = path.join(playgroundPath, difficulty)

    const quizFileName = `${getQuestionFullName(quiz.no, difficulty, title)}.ts`
    const quizPathFull = path.join(quizzesPathByDifficulty, quizFileName)

    if (!keepChanges || (keepChanges && isQuizWritable(quizFileName, overridableFiles!, playgroundSnapshot!))) {
      if (!fs.existsSync(quizzesPathByDifficulty))
        fs.mkdirSync(quizzesPathByDifficulty)
      await fs.writeFile(quizPathFull, code, 'utf-8')
      incomingQuizzesCache[quizFileName] = await calculateFileHash(quizPathFull)
    }
  }

  fs.writeFile(playgroundCachePath, JSON.stringify({
    ...currentPlaygroundCache,
    ...incomingQuizzesCache,
  }))

  console.log()
  console.log(c.bold.green('Local playground generated at: ') + c.dim(playgroundPath))
  console.log()
}

generatePlayground()
