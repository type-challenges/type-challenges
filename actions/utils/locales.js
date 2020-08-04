export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN']

export const messages = {
  en: require('../locales/en.json'),
  'zh-CN': require('../locales/zh-CN.json'),
}

export function t(locale, key) {
  return messages[locale][key] || messages[defaultLocale][key]
}

export function f(name, locale, ext) {
  if (locale === defaultLocale)
    return `${name}.${ext}`
  return `${name}.${locale}.${ext}`
}
