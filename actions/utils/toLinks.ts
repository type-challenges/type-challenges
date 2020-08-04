import type { Quiz } from '../../scripts/types'
import type { SupportedLocales } from '../../scripts/locales'
import { t } from './locales'
import { toReadmeShort } from './toPlaygroundUrl'

export function toLinks(quiz: Quiz, locale: SupportedLocales) {
  return '\n\n'
        + `> ${t(locale, 'link.view-on-github')}${toReadmeShort(quiz.no, locale)}`
}
