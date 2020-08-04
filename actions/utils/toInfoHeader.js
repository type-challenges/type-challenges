import { t } from './locales'
import { resolveInfo } from './resolveInfo'

export const toInfoHeader = function toInfoHeader(quiz, locale) {
  const info = resolveInfo(quiz, locale)
  return `${quiz.no} - ${info.title || ''}\n`
        + '-------\n'
        + `by ${info.author?.name} (@${info?.author?.github}) #${t(locale, `difficulty.${quiz.difficulty}`)} ${info?.tags?.map(i => `#${i}`).join(' ') || ''}\n\n`
        + `### ${t(locale, 'title.question')}\n\n`
}
