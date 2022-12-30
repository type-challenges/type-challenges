import path from 'path'
import { argv } from 'process'
import fs from 'fs-extra'
import c from 'picocolors'
import prompts from 'prompts'
import { formatToCode } from './actions/utils/formatToCode'
import { loadQuizes, resolveInfo } from './loader'
import { defaultLocale, supportedLocales } from './locales'
import { getQuestionFullName } from './actions/issue-pr'
import type { QuizMetaInfo } from './types'

async function generatePlayground() {
  const quizesPath = path.join(__dirname, '../playground')
  let locale = supportedLocales.find(locale => locale === argv[2])!

  console.log(c.bold(c.cyan('Generateing local playground...\n')))

  if (fs.existsSync(quizesPath)) {
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

  await fs.remove(quizesPath)
  await fs.ensureDir(quizesPath)

  const quizes = await loadQuizes()
  for (const quiz of quizes) {
    const { difficulty, title } = resolveInfo(quiz, locale) as QuizMetaInfo & { difficulty: string }
    const code = formatToCode(quiz, locale)
    const filepath = path.join(quizesPath, `${getQuestionFullName(quiz.no, difficulty, title)}.ts`)

    await fs.writeFile(filepath, code, 'utf-8')
  }

  console.log()
  console.log(c.bold(c.green('Local playground generated at: ')) + c.dim(quizesPath))
  console.log()
}

generatePlayground()
