import { updateREADMEs } from './readme'
import { translateAllQuizes } from './translate'
import { defaultLocale } from './locales'

async function run() {
  await translateAllQuizes(defaultLocale, 'zh-CN')
  await translateAllQuizes(defaultLocale, 'ja')
  await translateAllQuizes(defaultLocale, 'pt-BR')
  await updateREADMEs()
}

run()
