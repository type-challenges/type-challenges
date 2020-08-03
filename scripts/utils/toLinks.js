import { t } from '../locales'
import { toReadmeShort } from '../toUrl'

export function toLinks(quiz, locale) {
  return '\n\n'
        + `> ${t(locale, 'link.view-on-github')}${toReadmeShort(quiz.no, locale)}`
}
