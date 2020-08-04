import lzs from 'lz-string'
import { defaultLocale, SupportedLocale } from './locales'

const DOMAIN = 'https://type-challenges.netlify.app'
const TYPESCRIPT_PLAYGROUND = 'https://www.staging-typescript.org/play'

export function toSolutionsShort(no: number) {
  return `${DOMAIN}/${no}/solutions`
}

export function toHomepageShort(locale: SupportedLocale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${locale}`
    : `${DOMAIN}`
}

export function toAnswerShort(no: number, locale: SupportedLocale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/answer/${locale}`
    : `${DOMAIN}/${no}/answer`
}

export function toReadmeShort(no: number, locale: SupportedLocale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/${locale}`
    : `${DOMAIN}/${no}`
}

export function toPlaygroundUrl(
  code: string,
  config: Object = {},
  site = TYPESCRIPT_PLAYGROUND,
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}
