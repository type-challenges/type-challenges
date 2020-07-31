import path from 'path'
import fs from 'fs-extra'
import { supportedLocales, defaultLocale, t, SupportedLocale, f } from './locales'
import { loadQuizes, resolveInfo } from './loader'
import { toPlayShort, toQuizREADME, toSolutionsShort, toAnswerShort, toReadmeShort, toNearborREADME } from './toUrl'
import { Quiz, QuizMetaInfo } from './types'

const DifficultyColors: Record<string, string> = {
  warm: 'teal',
  easy: '90bb12',
  medium: 'eaa648',
  hard: 'red',
  extreme: 'b11b8d',
}

const DifficultyRank = [
  'warm',
  'easy',
  'medium',
  'hard',
  'extreme',
]

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

function toDifficultyBadge(difficulty: string, locale: SupportedLocale) {
  return toBadge('', t(locale, `difficulty.${difficulty}`), DifficultyColors[difficulty])
}

function toDifficultyBadgeInverted(difficulty: string, locale: SupportedLocale) {
  return toBadge(t(locale, `difficulty.${difficulty}`), ' ', DifficultyColors[difficulty])
}

function quizToBadge(quiz: Quiz, locale: string) {
  return toBadgeLink(
    toQuizREADME(quiz, locale),
    '',
    `${quiz.no}・${quiz.info[locale]?.title || quiz.info[defaultLocale]?.title}`,
    DifficultyColors[quiz.difficulty],
  )
}

function quizNoToBadges(ids: (string|number)[], quizes: Quiz[], locale: string) {
  return ids
    .map(i => quizes.find(q => q.no === Number(i)))
    .filter(Boolean)
    .map(i => quizToBadge(i!, locale))
    .join(' ')
}

function getAllTags(quizes: Quiz[], locale: string) {
  const set = new Set<string>()
  for (const quiz of quizes) {
    const info = resolveInfo(quiz, locale)
    for (const tag of (info?.tags || []))
      set.add(tag as string)
  }
  return Array.from(set).sort()
}

function getQuizesByTag(quizes: Quiz[], locale: string, tag: string) {
  return quizes.filter((quiz) => {
    const info = resolveInfo(quiz, locale)
    return !!info.tags?.includes(tag)
  })
}

async function insertInfoReadme(filepath: string, quiz: Quiz, locale: SupportedLocale, quizes: Quiz[]) {
  if (!fs.existsSync(filepath))
    return
  let text = await fs.readFile(filepath, 'utf-8')
  /* eslint-disable prefer-template */

  if (!text.match(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/))
    text = `<!--info-header-start--><!--info-header-end-->\n\n${text}`
  if (!text.match(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/))
    text = `${text}\n\n<!--info-footer-start--><!--info-footer-end-->`

  const info = resolveInfo(quiz, locale)

  const avaliableLocales = supportedLocales.filter(l => l !== locale).filter(l => !!quiz.readme[l])

  text = text
    .replace(
      /<!--info-header-start-->[\s\S]*<!--info-header-end-->/,
      '<!--info-header-start-->'
      + `<h1>${escapeHtml(info.title || '')} ${toDifficultyBadge(quiz.difficulty, locale)} ${(info.tags || []).map(i => toBadge('', `#${i}`, '999')).join(' ')}</h1>`
      + `<blockquote><p>${toAuthorInfo(info.author)}</p></blockquote>`
      + '<p>'
      + toBadgeLink(toPlayShort(quiz.no, locale), '', t(locale, 'badge.take-the-challenge'), '3178c6', '?logo=typescript')
      + (avaliableLocales.length ? ('&nbsp;&nbsp;&nbsp;' + avaliableLocales.map(l => toBadgeLink(toNearborREADME(quiz, l), '', t(l, 'display'), 'gray')).join(' ')) : '')
      + '</p>'
      + '<!--info-header-end-->',
    )
    .replace(
      /<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/,
      '<!--info-footer-start--><br>'
      + toBadgeLink(`../../${f('README', locale, 'md')}`, '', t(locale, 'badge.back'), 'grey')
      + toBadgeLink(toAnswerShort(quiz.no, locale), '', t(locale, 'badge.share-your-solutions'), 'teal')
      + toBadgeLink(toSolutionsShort(quiz.no), '', t(locale, 'badge.checkout-solutions'), 'de5a77', '?logo=awesome-lists&logoColor=white')
      + (Array.isArray(info.related) && info.related.length ? `<hr><h3>${t(locale, 'readme.related-challenges')}</h3>${quizNoToBadges(info.related, quizes, locale)}` : '')
      + '<!--info-footer-end-->',
    )

  /* eslint-enable prefer-template */

  await fs.writeFile(filepath, text, 'utf-8')
}

async function updateIndexREADME(quizes: Quiz[]) {
  // update index README
  for (const locale of supportedLocales) {
    const filepath = path.resolve(__dirname, '..', f('README', locale, 'md'))

    let challengesREADME = ''
    let prev = ''

    // Difficulty
    const quizesByDifficulty = [...quizes].sort((a, b) => DifficultyRank.indexOf(a.difficulty) - DifficultyRank.indexOf(b.difficulty))
    for (const quiz of quizesByDifficulty) {
      if (prev !== quiz.difficulty)
        challengesREADME += `${prev ? '<br><br>' : ''}${toDifficultyBadgeInverted(quiz.difficulty, locale)}<br>`

      challengesREADME += quizToBadge(quiz, locale)

      prev = quiz.difficulty
    }

    challengesREADME += '<br><details><summary>By Tags</summary><br><table><tbody>'
    const tags = getAllTags(quizes, locale)
    for (const tag of tags) {
      challengesREADME += `<tr><td>${toBadge('', `#${tag}`, '999')}</td><td>`
      getQuizesByTag(quizesByDifficulty, locale, tag)
        .forEach((quiz) => {
          challengesREADME += quizToBadge(quiz, locale)
        })
      challengesREADME += '</td></tr>'
    }
    challengesREADME += '</tbody></table></details>'

    let readme = await fs.readFile(filepath, 'utf-8')
    readme = readme.replace(
      /<!--challenges-start-->[\s\S]*<!--challenges-end-->/m,
      `<!--challenges-start-->\n${challengesREADME}\n<!--challenges-end-->`,
    )
    await fs.writeFile(filepath, readme, 'utf-8')
  }
}

async function updateQuestionsREADME(quizes: Quiz[]) {
  const questionsDir = path.resolve(__dirname, '../questions')

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
        quizes,
      )
    }
  }
}

export async function updateREADMEs(argv: string[]) {
  const quizes = await loadQuizes()
  quizes.sort((a, b) => a.no - b.no)

  if (argv[0] === 'quiz') {
    await updateQuestionsREADME(quizes)
  }
  else if (argv[0] === 'index') {
    await updateIndexREADME(quizes)
  }
  else {
    await Promise.all([
      updateIndexREADME(quizes),
      updateQuestionsREADME(quizes),
    ])
  }
}

updateREADMEs(process.argv.slice(2))
