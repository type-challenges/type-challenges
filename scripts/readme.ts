import path from 'path'
import fs from 'fs-extra'
import { supportedLocales, defaultLocale, t, SupportedLocale, f } from './locales'
import { loadQuizes, resolveInfo } from './list'
import { toPlay, toQuizREADME, toAnswers } from './toUrl'
import { Quiz, QuizMetaInfo } from './types'

const DifficultyColors: Record<string, string> = {
  'warm-up': 'teal',
  easy: 'green',
  medium: 'd8af2c',
  hard: 'red',
  extreme: 'purple',
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function toBadgeURL(label: string, text: string, color: string, args = '') {
  return `https://img.shields.io/badge/${encodeURIComponent(label.replace(/-/g, '--'))}-${encodeURIComponent(text.replace(/-/g, '--'))}-${color}${args}`
}

function toBadge(label: string, text: string, color: string, args = '') {
  return `<img src="${toBadgeURL(label, text, color, args)}" alt="${text}"/>`
}

function toBadgeLink(url: string, label: string, text: string, color: string, args = '') {
  return `<a href="${url}" target="_blank">${toBadge(label, text, color, args)}</a> `
}

function toAuthorInfo(author: Partial<QuizMetaInfo['author']> = {}) {
  return `by ${author.name}${author.github ? ` <a href="https://github.com/${author.github}" target="_blank">@${author.github}</a>` : ''}`
}

async function insertInfoReadme(filepath: string, quiz: Quiz, locale: SupportedLocale) {
  if (!fs.existsSync(filepath))
    return
  let text = await fs.readFile(filepath, 'utf-8')
  /* eslint-disable prefer-template */

  if (!text.match(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/))
    text = `<!--info-header-start--><!--info-header-end-->\n\n${text}`
  if (!text.match(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/))
    text = `${text}\n\n<!--info-footer-start--><!--info-footer-end-->`

  const info = resolveInfo(quiz, locale)

  text = text
    .replace(
      /<!--info-header-start-->[\s\S]*<!--info-header-end-->/,
      '<!--info-header-start-->'
      + `<h1>${escapeHtml(info.title || '')} ${toBadge('', quiz.difficulty, DifficultyColors[quiz.difficulty])}</h1>`
      + `<blockquote><p>${toAuthorInfo(info.author)}</p></blockquote><br>`
      + toBadgeLink(toPlay(quiz.no, locale), '', t(locale, 'take-the-challenge'), 'blue', '?logo=typescript')
      + '<br><br>'
      + '<!--info-header-end-->',
    )
    .replace(
      /<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/,
      '<!--info-footer-start-->'
      + toBadgeLink(`../../${f('README', locale, 'md')}`, '', t(locale, 'back'), 'grey')
      + toBadgeLink(toAnswers(quiz.no), '', t(locale, 'see-answers'), 'F59BAF', '?logo=awesome-lists&logoColor=white')
      + '<!--info-footer-end-->',
    )

  /* eslint-enable prefer-template */

  await fs.writeFile(filepath, text, 'utf-8')
}

export async function build() {
  const quizes = await loadQuizes()
  const questionsDir = path.resolve(__dirname, '../questions')

  // update index README
  for (const locale of supportedLocales) {
    const filepath = path.resolve(__dirname, '..', f('README', locale, 'md'))

    let challengesREADME = ''

    for (const quiz of quizes) {
      challengesREADME += toBadgeLink(
        toQuizREADME(quiz, locale),
        '',
        `#${quiz.no}・${quiz.info[locale]?.title || quiz.info[defaultLocale]?.title}`,
        DifficultyColors[quiz.difficulty],
      )
    }

    let readme = await fs.readFile(filepath, 'utf-8')
    readme = readme.replace(
      /<!--challenges-start-->[\s\S]*<!--challenges-end-->/m,
      `<!--challenges-start-->\n${challengesREADME}\n<!--challenges-end-->`,
    )
    await fs.writeFile(filepath, readme, 'utf-8')
  }

  // update each questions' readme
  for (const quiz of quizes) {
    for (const locale of supportedLocales) {
      await insertInfoReadme(
        path.join(
          questionsDir,
          quiz.path,
          f('README', locale, 'md'),
        ),
        quiz,
        locale,
      )
    }
  }
}

build()
