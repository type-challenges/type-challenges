import { defaultLocale } from '../locales'

export function resolveFilePath(dir: string, name: string, ext: string, locale: string) {
  if (locale === defaultLocale)
    return `${dir}/${name}.${ext}`
  else
    return `${dir}/${name}.${locale}.${ext}`
}
