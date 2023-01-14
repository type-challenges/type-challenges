import type { Quiz } from '../../types'

import type { SupportedLocale } from '../../locales'
import { t } from '../../locales'
import { toAnswerShort, toHomepageShort, toSolutionsShort } from '../../toUrl'

export const toFooter = function (quiz: Quiz, locale: SupportedLocale) {
  return '\n\n'
        + `> ${t(locale, 'link.share-solutions')}${toAnswerShort(quiz.no, locale)}\n`
        + `> ${t(locale, 'link.checkout-solutions')}${toSolutionsShort(quiz.no)}\n`
        + `> ${t(locale, 'link.more-challenges')}${toHomepageShort(locale)}\n`
}
