import { Quiz } from '../../scripts/types'
import { SupportedLocales } from '../../scripts/locales'
import { t } from './locales'

import { toAnswerShort, toHomepageShort, toSolutionsShort } from './toPlaygroundUrl'

export const toFooter = function(quiz: Quiz, locale: SupportedLocales) {
  return '\n\n'
        + `> ${t(locale, 'link.share-solutions')}${toAnswerShort(quiz.no, locale)}\n`
        + `> ${t(locale, 'link.checkout-solutions')}${toSolutionsShort(quiz.no)}\n`
        + `> ${t(locale, 'link.more-challenges')}${toHomepageShort(locale)}\n`
}
