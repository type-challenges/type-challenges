import type { SupportedLocales } from '../../scripts/locales'

export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN']

export const messages = {
  en: require('../locales/en.json'),
  'zh-CN': require('../locales/zh-CN.json'),
}

export function t(locale: SupportedLocales, key: string): string {
  return messages[locale][key] || messages[defaultLocale][key]
}

export function f(name: string, locale: string, ext: string) {
  if (locale === defaultLocale)
    return `${name}.${ext}`
  return `${name}.${locale}.${ext}`
}
