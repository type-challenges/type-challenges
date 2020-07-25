export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN'] as const

export const messages = {
  en: require('./locales/en.json'),
  'zh-CN': require('./locales/zh-CN.json'),
}
