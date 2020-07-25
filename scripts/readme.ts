import path from 'path'
import fs from 'fs-extra'
import { supportedLocales, defaultLocale, messages } from './locales'
import { loadQuizes } from './list'
import { toPlay, toQuizREADME } from './toUrl'
import { Quiz } from './types'

const DifficultyColors: Record<string, string> = {
  'warm-up': 'yellow',
  easy: 'green',
  medium: 'orange',
  hard: 'red',
  extreme: 'purple',
}

const Badges = {
  difficulty: {
    'warm-up': 'https://img.shields.io/badge/-warm--up-yellow',
    easy: 'https://img.shields.io/badge/-easy-green',
    medium: 'https://img.shields.io/badge/-medium-orange',
    hard: 'https://img.shields.io/badge/-hard-red',
    extreme: 'https://img.shields.io/badge/-extreme-purple',
  },
  actions: {
    play: 'https://img.shields.io/badge/-take%20the%20challenge-007ACC?logo=typescript',
    answers: 'https://img.shields.io/badge/-answers-F59BAF?logo=awesome-lists&logoColor=white',
  },
  locales: {
    'zh-CN': 'https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-888',
    en: 'https://img.shields.io/badge/-English-888',
  },
  quiz(no: number, name: string, difficulty: string) {
    return `https://img.shields.io/badge/-${encodeURIComponent(`#${no} -- ${name}`)}-${DifficultyColors[difficulty]}`
  },
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

async function insertInfoReadme(filepath: string, quiz: Quiz, locale: keyof typeof messages) {
  if (!fs.existsSync(filepath))
    return
  let text = await fs.readFile(filepath, 'utf-8')

  if (!text.match(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/))
    text = `<!--info-header-start--><!--info-header-end-->\n\n${text}`
  if (!text.match(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/))
    text = `${text}\n\n<!--info-footer-start--><!--info-footer-end-->`

  const info = Object.assign({}, quiz.info[defaultLocale], quiz.info[locale])

  text = text
    .replace(
      /<!--info-header-start-->[\s\S]*<!--info-header-end-->/,
      `<!--info-header-start-->\n# ${info.title} ${toBadge('', quiz.difficulty, DifficultyColors[quiz.difficulty])}\n> by ${info.author?.name}\n<!--info-header-end-->`,
    )
    .replace(
      /<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/,
      `<!--info-footer-start-->\n${
        toBadgeLink(toPlay(quiz.no, locale), '', messages[locale]['take-the-challenge'], 'blue', '?logo=typescript')
        + toBadgeLink(toPlay(quiz.no, locale), '', messages[locale]['see-answers'], 'F59BAF', '?logo=awesome-lists&logoColor=white')
      }\n<!--info-footer-end-->`,
    )

  await fs.writeFile(filepath, text, 'utf-8')
}

export async function build() {
  const quizes = await loadQuizes()
  const questionsDir = path.resolve(__dirname, '../questions')

  // update index README
  for (const locale of supportedLocales) {
    const filepath = path.resolve(__dirname, '..',
      locale === defaultLocale
        ? 'README.md'
        : `README.${locale}.md`,
    )

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
          locale === defaultLocale ? 'README.md' : `README.${locale}.md`),
        quiz,
        locale,
      )
    }
  }
}

build()
