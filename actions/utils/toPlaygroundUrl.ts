import lzs from 'lz-string'
import { SupportedLocales } from '../../scripts/locales'
import { TYPESCRIPT_PLAYGROUND } from '../../scripts/toUrl'
import { defaultLocale } from './locales'

const DOMAIN = 'https://type-challenges.netlify.app'

export function toSolutionsShort(no: string) {
  return `${DOMAIN}/${no}/solutions`
}

export function toHomepageShort(locale: SupportedLocales) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${locale}`
    : `${DOMAIN}`
}

export function toAnswerShort(no: string, locale: SupportedLocales) {
  return locale !== defaultLocale
    ? `${DOMAIN}/${no}/answer/${locale}`
    : `${DOMAIN}/${no}/answer`
}

export function toReadmeShort(no: string, locale: SupportedLocales) {
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
