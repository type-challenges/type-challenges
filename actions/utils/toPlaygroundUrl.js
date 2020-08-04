import lzs from 'lz-string'
import { defaultLocale } from './locales'

const DOMAIN = 'https://type-challenges.netlify.app'

export function toSolutionsShort(no) {
  return `${DOMAIN}/${no}/solutions`
}

export function toHomepageShort(locale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${locale}`
    : `${DOMAIN}`
}

export function toAnswerShort(no, locale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/answer/${locale}`
    : `${DOMAIN}/${no}/answer`
}

export function toReadmeShort(no, locale) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/${locale}`
    : `${DOMAIN}/${no}`
}

export function toPlaygroundUrl(
  code,
  config,
  site,
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}
