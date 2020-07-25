import lzs from 'lz-string'
import { Quiz } from './types'
import { defaultLocale } from './locales'

export const REPO = 'https://github.com/type-challenges/type-challenges'
export const DOMAIN = 'https://type-challenges.netlify.app'
export const TYPESCRIPT_PLAYGROUND = 'https://www.staging-typescript.org/play'

// https://github.com/microsoft/TypeScript-Website/tree/v2/packages/playground
export function toPlaygroundUrl(
  code: string,
  config: Object = {},
  site = TYPESCRIPT_PLAYGROUND,
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${v}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}

export function toAnswersIssue(no: number) {
  return `${REPO}/issues?q=label%3A%23${no}+label%3Aanswer`
}

export function toAnswers(no: number) {
  return `${DOMAIN}/case/${no}/answers`
}

export function toPlay(no: number, locale?: string) {
  return locale !== defaultLocale
    ? `${DOMAIN}/case/${no}/play/${locale}`
    : `${DOMAIN}/case/${no}/play`
}

export function toQuizREADME(quiz: Quiz, locale?: string) {
  return locale && locale !== defaultLocale && quiz.readme[locale]
    ? `./questions/${quiz.path}/README.${locale}.md`
    : `./questions/${quiz.path}/README.md`
}
