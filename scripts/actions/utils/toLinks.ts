import { Quiz } from '../../types'
import { SupportedLocale, t } from '../../locales'
import { toReadmeShort } from '../../toUrl'

export function toLinks(quiz: Quiz, locale: SupportedLocale) {
  return '\n\n'
        + `> ${t(locale, 'link.view-on-github')}${toReadmeShort(quiz.no, locale)}`
}
