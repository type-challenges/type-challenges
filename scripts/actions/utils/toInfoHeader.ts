import type { Quiz } from '../../types'
import type { SupportedLocale } from '../../locales'
import { t } from '../../locales'
import { resolveInfo } from '../../loader'

export const toInfoHeader = function toInfoHeader(quiz: Quiz, locale: SupportedLocale) {
  const info = resolveInfo(quiz, locale)

  const author = `${info.author?.name} (@${info?.author?.github})`

  return `${quiz.no} - ${info.title || ''}\n`
        + '-------\n'
        + `by ${author} #${t(locale, `difficulty.${quiz.difficulty}`)} ${info?.tags?.map(i => `#${i}`).join(' ') || ''}\n\n`
        + `### ${t(locale, 'title.question')}\n\n`
}
