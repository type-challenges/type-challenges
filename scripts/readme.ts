import path from 'path'
import fs from 'fs-extra'
import { supportedLocales, defaultLocale } from './locales'
import { loadQuizes } from './list'
import { toPlay } from './toUrl'

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

export async function build() {
  const quizes = await loadQuizes()

  for (const locale of supportedLocales) {
    const filepath = path.resolve(__dirname, '..',
      locale === defaultLocale
        ? 'README.md'
        : `README.${locale}.md`,
    )

    let challengesREADME = ''

    for (const quiz of quizes)
      challengesREADME += `<a href="${toPlay(quiz.no, locale)}"><img src="${Badges.quiz(quiz.no, quiz.info[locale]?.title || '', quiz.difficulty)}"/></a>`

    let readme = await fs.readFile(filepath, 'utf-8')
    readme = readme.replace(
      /<!--challenges-start-->[\s\S]*<!--challenges-end-->/m,
      `<!--challenges-start-->\n${challengesREADME}\n<!--challenges-end-->`,
    )
    await fs.writeFile(filepath, readme, 'utf-8')
  }
}

build()
