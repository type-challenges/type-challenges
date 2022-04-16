import type { Quiz } from '../../types'
import type { SupportedLocale } from '../../locales'
import { defaultLocale, t } from '../../locales'
import { toCommentBlock } from './toCommentBlock'
import { toInfoHeader } from './toInfoHeader'
import { toLinks } from './toLinks'
import { toDivider } from './toDivider'
import { toFooter } from './toFooter'

export const formatToCode = (quiz: Quiz, locale: SupportedLocale) => {
  return `${toCommentBlock(
    toInfoHeader(quiz, locale)
        + (quiz.readme[locale] || quiz.readme[defaultLocale])
        + toLinks(quiz, locale),
  )
        + toDivider(t(locale, 'divider.code-start'))
  }\n${
    (quiz.template || '').trim()
  }\n\n${
    toDivider(t(locale, 'divider.test-cases'))
  }${quiz.tests || ''
  }\n\n${
    toDivider(t(locale, 'divider.further-steps'))
  }${toCommentBlock(toFooter(quiz, locale))}`
}
