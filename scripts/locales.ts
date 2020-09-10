export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN', 'ja'] as const

export const messages = {
  en: require('./locales/en.json'),
  'zh-CN': require('./locales/zh-CN.json'),
  ja: require('./locales/ja.json'),
}

export type SupportedLocale = keyof typeof messages

export function t(locale: SupportedLocale, key: string): string {
  return messages[locale][key] || messages[defaultLocale][key]
}

export function f(name: string, locale: string, ext: string) {
  if (locale === defaultLocale)
    return `${name}.${ext}`
  return `${name}.${locale}.${ext}`
}
