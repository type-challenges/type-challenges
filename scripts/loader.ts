import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import YAML from 'js-yaml'
import { Quiz, QuizMetaInfo } from './types'
import { supportedLocales, defaultLocale } from './locales'

export async function loadFile(filepath: string) {
  if (fs.existsSync(filepath))
    return await fs.readFile(filepath, 'utf-8')
  return undefined
}

export async function loadLocaleVariations<T = string>(
  filepath: string,
  preprocessor: (s: string) => T = s => s as any as T,
  translator?: (s: T) => Promise<T>,
) {
  const { ext, dir, name } = path.parse(filepath)
  const data: Record<string, T> = {}

  for (const locale of supportedLocales) {
    const file = preprocessor(await loadFile(path.join(dir, `${name}.${locale}${ext}`)) || '')

    if (file)
      data[locale] = file
  }

  // seems like only have en version
  // so we need add a other version
  if (!data[defaultLocale]) {
    // default version
    const file = preprocessor(await loadFile(filepath) || '')
    if (file)
      data[defaultLocale] = file

    if (translator) {
      // add other version
      const otherVersion = supportedLocales.filter(locale => locale !== defaultLocale)

      for (const locale of otherVersion)
        // data[locale] = await translator(locale)
        data[locale] = await loadFile(filepath).then(text => preprocessor(text || '')).then(data => translator(data))
    }
  }

  return data
}

export function readmeCleanUp(text: string) {
  return text
    .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, '')
    .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, '')
    .trim()
}

export function loadInfo(s: string): Partial<QuizMetaInfo> | undefined {
  const object = YAML.safeLoad(s) as any
  if (!object)
    return undefined

  const arrayKeys = ['tags', 'related']

  for (const key of arrayKeys) {
    if (object[key]) {
      object[key] = (object[key] || '')
        .toString()
        .split(',')
        .map((i: string) => i.trim())
        .filter(Boolean)
    }
    else {
      object[key] = undefined
    }
  }

  return object
}

export async function loadQuizes(): Promise<Quiz[]> {
  const root = path.resolve(__dirname, '../questions')
  const folders = await fg('{0..9}*-*', {
    onlyDirectories: true,
    cwd: root,
  })

  const quizes = await Promise.all(
    folders.map(async(dir) => {
      const quiz: Quiz = {
        no: Number(dir.replace(/^(\d+)-.*/, '$1')),
        difficulty: dir.replace(/^\d+-(.+?)-.*$/, '$1') as any,
        path: dir,
        info: await loadLocaleVariations(path.join(root, dir, 'info.yml'), loadInfo),
        readme: await loadLocaleVariations(path.join(root, dir, 'README.md'), readmeCleanUp),
        template: await loadFile(path.join(root, dir, 'template.ts')) || '',
        tests: await loadFile(path.join(root, dir, 'test-cases.ts')),
      }
      return quiz
    }),
  )

  return quizes
}

export function resolveInfo(quiz: Quiz, locale: string = defaultLocale) {
  const info = Object.assign({}, quiz.info[defaultLocale], quiz.info[locale])
  info.tags = quiz.info[locale]?.tags || quiz.info[defaultLocale]?.tags || []
  info.related = quiz.info[locale]?.related || quiz.info[defaultLocale]?.related || []
  return info as QuizMetaInfo
}
