import path from 'path'
import { argv } from 'process'
import fs from 'fs-extra'
import { formatToCode } from './actions/utils/formatToCode'
import { loadQuizes, resolveInfo } from './loader'
import { supportedLocales, defaultLocale } from './locales'
import { getQuestionFullName } from './actions/issue-pr'
import { QuizMetaInfo } from './types'

async function buildQuizesLocal() {
  const quizesPath = path.join(__dirname, '/../quizes')
  const locale = supportedLocales.find(locale => locale === argv[2]) ?? defaultLocale

  await fs.remove(quizesPath)
  await fs.ensureDir(quizesPath)

  const quizes = await loadQuizes()

  for (const quiz of quizes) {
    const { difficulty, title } = resolveInfo(quiz, locale) as QuizMetaInfo & { difficulty: string }
    const code = formatToCode(quiz, locale)

    fs.writeFileSync(path.join(quizesPath, `${getQuestionFullName(quiz.no, difficulty, title)}.ts`), code, 'utf-8')
  }
}

buildQuizesLocal()
