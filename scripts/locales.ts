export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN', 'ja', 'ko'] as const

export const messages = {
  en: require('./locales/en.json'),
  'zh-CN': require('./locales/zh-CN.json'),
  ja: require('./locales/ja.json'),
  ko: require('./locales/ko.json'),
}

export type SupportedLocale = keyof typeof messages

export function t(locale: SupportedLocale, key: string): string {
  return (messages[locale] && messages[locale][key]) || messages[defaultLocale][key]
}

export function f(name: string, locale: string, ext: string) {
  if (locale === defaultLocale)
    return `${name}.${ext}`
  return `${name}.${locale}.${ext}`
}
