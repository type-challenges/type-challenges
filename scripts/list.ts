import path from 'path'
import fs, { open } from 'fs-extra'
import fg from 'fast-glob'
import YAML from 'js-yaml'
import { Quiz, QuizMetaInfo } from './types'
import { supportedLocales, defaultLocale } from './locales'

export async function loadFile(filepath: string) {
  if (fs.existsSync(filepath))
    return await fs.readFile(filepath, 'utf-8')
  return undefined
}

export async function loadLocaleVariations<T = string>(filepath: string, postprocessor: (s: string) => T = s => s as any as T) {
  const { ext, dir, name } = path.parse(filepath)
  const data: Record<string, T> = {}
  for (const locale of supportedLocales) {
    const file = postprocessor(await loadFile(path.join(dir, `${name}.${locale}${ext}`)) || '')
    if (file)
      data[locale] = file
  }
  if (!data[defaultLocale])
    data[defaultLocale] = postprocessor(await loadFile(filepath) || '')
  return data
}

export function readmeCleanUp(text: string) {
  return text
    .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, '')
    .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, '')
    .trim()
}

export async function loadQuizes(): Promise<Quiz[]> {
  const root = path.resolve(__dirname, '../questions')
  const folders = await fg('{0..9}-*', {
    onlyDirectories: true,
    cwd: root,
  })

  const quizes = await Promise.all(
    folders.map(async(dir) => {
      const quiz: Quiz = {
        no: Number(dir.replace(/^(\d+)-.*/, '$1')),
        difficulty: dir.replace(/^\d+-(.+?)-.*$/, '$1') as any,
        path: dir,
        info: await loadLocaleVariations(path.join(root, dir, 'info.yml'), s => YAML.safeLoad(s) as Partial<QuizMetaInfo>),
        readme: await loadLocaleVariations(path.join(root, dir, 'README.md'), readmeCleanUp),
        template: await loadFile(path.join(root, dir, 'template.ts')) || '',
        tests: await loadFile(path.join(root, dir, 'test-cases.ts')),
      }
      return quiz
    }),
  )

  return quizes
}

export function resolveInfo(quiz: Quiz, locale: string) {
  return Object.assign({}, quiz.info[defaultLocale], quiz.info[locale])
}

export function getTags(quiz: Quiz, locale: string) {
  const info = resolveInfo(quiz, locale)
  return (info.tags || '').split(',').map(i => i.trim()).filter(Boolean)
}
