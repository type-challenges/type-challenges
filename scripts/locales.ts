export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN'] as const
export type SupportedLocales = typeof supportedLocales[number]

export const messages = {
  en: require('../actions/locales/en.json'),
  'zh-CN': require('../actions/locales/zh-CN.json'),
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
