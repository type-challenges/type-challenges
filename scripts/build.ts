import path from 'path'
import fs from 'fs-extra'
import { loadQuizes } from './list'
import { toPlaygroundUrl } from './toUrl'
import { Quiz } from './types'

function toCommentBlock(text: string) {
  return `/**\n${text
    .trim()
    .split('\n')
    .map(i => `  ${i}`)
    .join('\n')
  }\n\n */\n\n`
}

function toDivier(text: string) {
  return `\n/* _____________ ${text} _____________ */\n`
}

function toInfoHeader(quiz: Quiz) {
  return `#${quiz.no} - ${quiz.info?.title || ''} \nby ${quiz.info?.author?.name} (@${quiz.info?.author?.github}) #${quiz.difficulty}\n------\n\n`
}

export async function build() {
  const quizes = await loadQuizes()
  const redirects: [string, string, number][] = []

  for (const quiz of quizes) {
    /* eslint-disable prefer-template */

    const code
      = toCommentBlock(toInfoHeader(quiz) + quiz.readme)
      + toDivier('Your Code Here')
      + (quiz.template || '')
      + '\n\n'
      + toDivier('Test Cases')
      + (quiz.tests || '')

    /* eslint-enable prefer-template */

    const url = toPlaygroundUrl(code)
    redirects.push([`/case/${quiz.no}/play`, url, 302])
  }

  const dist = path.resolve(__dirname, 'dist')

  await fs.remove(dist)
  await fs.ensureDir(dist)

  await fs.writeFileSync(path.join(dist, '_redirects'), redirects.map(i => i.join('\t')).join('\n'), 'utf-8')
  await fs.writeFileSync(path.join(dist, 'index.html'), 'Hello World', 'utf-8')
}

build()
