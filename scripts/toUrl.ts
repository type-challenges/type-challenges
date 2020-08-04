import lzs from 'lz-string'
import { Quiz } from './types'
import { defaultLocale } from './locales'
import { resolveInfo } from './loader'

export const REPO = 'https://github.com/type-challenges/type-challenges'
export const DOMAIN = 'https://type-challenges.netlify.app'
export const TYPESCRIPT_PLAYGROUND = 'https://www.staging-typescript.org/play'

// https://github.com/microsoft/TypeScript-Website/tree/v2/packages/playground
export function toPlaygroundUrl(
  code: string,
  config: Object = {},
  site = TYPESCRIPT_PLAYGROUND,
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}

export function toSolutionsFull(no: number) {
  return `${REPO}/issues?q=label%3A${no}+label%3Aanswer`
}

export function toQuizREADME(quiz: Quiz, locale?: string, absolute = false) {
  const prefix = absolute ? `${REPO}/tree/master` : '.'
  return locale && locale !== defaultLocale && quiz.readme[locale]
    ? `${prefix}/questions/${quiz.path}/README.${locale}.md`
    : `${prefix}/questions/${quiz.path}/README.md`
}

export function toNearborREADME(quiz: Quiz, locale?: string) {
  return locale && locale !== defaultLocale && quiz.readme[locale]
    ? `./README.${locale}.md`
    : './README.md'
}

export function toShareAnswerFull(quiz: Quiz, locale: string = defaultLocale) {
  const info = resolveInfo(quiz, locale)
  return `https://github.com/type-challenges/type-challenges/issues/new?labels=answer,${encodeURIComponent(locale)}&template=answer.md&title=${encodeURIComponent(`${quiz.no} - ${info.title}`)}`
}

// Short

export function toReadmeShort(no: number, locale?: string) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/${locale}`
    : `${DOMAIN}/${no}`
}

export function toSolutionsShort(no: number) {
  return `${DOMAIN}/${no}/solutions`
}

export function toPlayShort(no: number, locale?: string) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/play/${locale}`
    : `${DOMAIN}/${no}/play`
}

export function toAnswerShort(no: number, locale? : string) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/answer/${locale}`
    : `${DOMAIN}/${no}/answer`
}

export function toHomepageShort(locale? : string) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${locale}`
    : `${DOMAIN}`
}
