import path from 'path'
import fs from 'fs-extra'
import { loadQuizes } from './list'
import { toPlaygroundUrl, toAnswers, REPO, toAnswersIssue } from './toUrl'
import { Quiz } from './types'
import { supportedLocales, defaultLocale, messages } from './locales'

function toCommentBlock(text: string) {
  return `/**\n${
    text
      .trim()
      .split('\n')
      .map(i => `  ${i}`)
      .join('\n')
  }\n*/\n\n`
}

function toDivier(text: string) {
  return `\n/* _____________ ${text} _____________ */\n`
}

function toInfoHeader(quiz: Quiz, locale: keyof typeof messages) {
  const info = Object.assign({}, quiz.info[defaultLocale], quiz.info[locale])
  return `#${quiz.no} - ${info.title || ''} \n-------\nby ${info.author?.name} (@${info?.author?.github}) #${quiz.difficulty}\n\n### ${messages[locale].question}\n\n`
}

function toLinks(quiz: Quiz, locale: keyof typeof messages) {
  return `\n\n> ${messages[locale]['link-tip-repo']}${REPO}\n> ${messages[locale]['link-tip-answers']}${toAnswers(quiz.no)}`
}

export async function build() {
  const quizes = await loadQuizes()
  const redirects: [string, string, number][] = []

  redirects.push(['/', REPO, 302])

  for (const quiz of quizes) {
    for (const locale of supportedLocales) {
      /* eslint-disable prefer-template */

      const code
      = toCommentBlock(
        toInfoHeader(quiz, locale)
        + (quiz.readme[locale] || quiz.readme[defaultLocale])
        + toLinks(quiz, locale),
      )
      + toDivier(messages[locale]['code-start'])
      + '\n'
      + (quiz.template || '').trim()
      + '\n\n'
      + toDivier(messages[locale]['test-cases'])
      + (quiz.tests || '')

      /* eslint-enable prefer-template */

      const url = toPlaygroundUrl(code)

      if (locale === defaultLocale)
        redirects.push([`/case/${quiz.no}/play`, url, 302])

      redirects.push([`/case/${quiz.no}/play/${locale}`, url, 302])
    }

    redirects.push([`/case/${quiz.no}/answers`, toAnswersIssue(quiz.no), 302])
  }

  const dist = path.resolve(__dirname, 'dist')

  await fs.remove(dist)
  await fs.ensureDir(dist)

  await fs.writeFileSync(path.join(dist, '_redirects'), redirects.map(i => i.join('\t')).join('\n'), 'utf-8')
}

build()
