import path from 'path'
import translate from 'google-translate-open-api'
import fs from 'fs-extra'
import { QUIZ_ROOT, loadQuizByNo, loadQuizes } from './loader'
import { resolveFilePath } from './utils/resolve'
import type { Quiz } from './types'
import type { SupportedLocale } from './locales'
import { t } from './locales'

export async function TranslateQuizByNo(no: number, from: SupportedLocale, to: SupportedLocale) {
  const quiz = await loadQuizByNo(no)
  if (!quiz)
    throw new Error(`Quiz #${no} not founded`)
  return await TranslateQuiz(quiz, from, to)
}

export async function TranslateQuiz(quiz: Quiz, from: SupportedLocale, to: SupportedLocale) {
  let translatedReadme = await translateMarkdown(quiz.readme[from], from, to)

  if (!translatedReadme)
    throw new Error(`Quiz #${quiz.no} empty translation`)

  translatedReadme = `> ${t(to, 'readme.google-translated')}\n\n${translatedReadme.trim()}`

  const readmePath = resolveFilePath(path.join(QUIZ_ROOT, quiz.path), 'README', 'md', to)
  await fs.writeFile(readmePath, translatedReadme, 'utf-8')

  console.log(`Translated [${quiz.no}] ${from} → ${to} | saved to ${readmePath}`)
}

export async function translateMarkdown(code: string, from: SupportedLocale, to: SupportedLocale) {
  // to replace the code blocks intro a placeholder then feed it into translator
  // then replace back for the results
  const code_blocks: string[] = []

  const source = code
    .replace(/```[\s\S\n]+?```/g, (v) => {
      const placeholder = `__${code_blocks.length}__`
      code_blocks.push(v)
      return placeholder
    })
    .replace(/`[\s\S\n]+?`/g, (v) => {
      const placeholder = `__${code_blocks.length}__`
      code_blocks.push(v)
      return placeholder
    })

  const { data: rawResult } = await translate(source, {
    tld: 'com',
    from,
    to,
  })

  if (!rawResult)
    return

  const result = (rawResult as string)
    .replace(/__\s*?(\d+?)\s*?__/g, (_, i) => code_blocks[+i])

  return result
}

export async function TranslateAllQuizes(from: SupportedLocale, to: SupportedLocale) {
  const quizes = await loadQuizes()

  for (const quiz of quizes) {
    if (quiz.readme[to] || !quiz.readme[from]) {
      console.log(`Skipped [${quiz.no}]`)
      continue
    }

    await TranslateQuiz(quiz, from, to)
  }
}
