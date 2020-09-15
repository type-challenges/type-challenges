import { updateREADMEs } from './readme'
import { TranslateAllQuizes } from './translate'

async function run() {
  await TranslateAllQuizes('en', 'zh-CN')
  await TranslateAllQuizes('en', 'ja')
  await updateREADMEs()
}

run()
