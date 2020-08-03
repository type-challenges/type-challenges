import { t } from '../locales'

import { toAnswerShort, toHomepageShort, toSolutionsShort } from '../toUrl'

export const toFooter = function(quiz, locale) {
  return '\n\n'
        + `> ${t(locale, 'link.share-solutions')}${toAnswerShort(quiz.no, locale)}\n`
        + `> ${t(locale, 'link.checkout-solutions')}${toSolutionsShort(quiz.no)}\n`
        + `> ${t(locale, 'link.more-challenges')}${toHomepageShort(locale)}\n`
}
