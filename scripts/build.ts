import path from 'path'
import fs from 'fs-extra'
import { loadQuizes, resolveInfo } from './loader'
import { REPO, toPlaygroundUrl, toQuizREADME, toShareAnswerFull, toSolutionsFull } from './toUrl'
import { defaultLocale, supportedLocales } from './locales'
import { formatToCode } from './actions/utils/formatToCode'

export async function build() {
  const quizes = await loadQuizes()
  const redirects: [string, string, number][] = []

  // redirect homepage to github repo
  redirects.push(['/', `${REPO}/blob/master/README.md`, 302])
  supportedLocales.filter(locale => locale !== defaultLocale).forEach((locale) => {
    redirects.push([`/${locale}`, `${REPO}/blob/master/README.${locale}.md`, 302])
  })

  for (const quiz of quizes) {
    for (const locale of supportedLocales) {
      const info = resolveInfo(quiz, locale)

      const code = formatToCode(quiz, locale)

      const url = toPlaygroundUrl(code, info.tsconfig || {})

      if (locale === defaultLocale) {
        redirects.push([`/${quiz.no}`, toQuizREADME(quiz, locale, true), 302])
        redirects.push([`/${quiz.no}/play`, url, 302])
        redirects.push([`/${quiz.no}/answer`, toShareAnswerFull(quiz), 302])
      }
      else {
        redirects.push([`/${quiz.no}/${locale}`, toQuizREADME(quiz, locale, true), 302])
        redirects.push([`/${quiz.no}/play/${locale}`, url, 302])
        redirects.push([`/${quiz.no}/answer/${locale}`, toShareAnswerFull(quiz, locale), 302])
      }
    }

    redirects.push([`/${quiz.no}/solutions`, toSolutionsFull(quiz.no), 302])
  }

  const dist = path.resolve(__dirname, 'dist')

  await fs.remove(dist)
  await fs.ensureDir(dist)

  await fs.writeFileSync(path.join(dist, '_redirects'), redirects.map(i => i.join('\t')).join('\n'), 'utf-8')
}

build()
