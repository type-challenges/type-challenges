import { Quiz } from '../../scripts/types'
import { SupportedLocales } from '../../scripts/locales'
import { defaultLocale } from './locales'

export function resolveInfo(quiz: Quiz, locale: SupportedLocales = defaultLocale) {
  const info = Object.assign({}, quiz.info[defaultLocale], quiz.info[locale])
  info.tags = quiz.info[locale]?.tags || quiz.info[defaultLocale]?.tags || []
  info.related = quiz.info[locale]?.related || quiz.info[defaultLocale]?.related || []
  return info
}
