import type { Quiz } from '../../scripts/types'
import { SupportedLocale, t } from './locales'
import { toReadmeShort } from './toPlaygroundUrl'

export function toLinks(quiz: Quiz, locale: SupportedLocale) {
  return '\n\n'
        + `> ${t(locale, 'link.view-on-github')}${toReadmeShort(quiz.no, locale)}`
}
