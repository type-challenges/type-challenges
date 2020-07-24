import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import YAML from 'js-yaml'
import { Quiz } from './types'

export async function loadFile(filepath: string) {
  if (fs.existsSync(filepath))
    return await fs.readFile(filepath, 'utf-8')
  return undefined
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
        info: YAML.safeLoad(await loadFile(path.join(root, dir, 'info.yml')) || '') as any,
        readme: await loadFile(path.join(root, dir, 'README.md')) || '',
        template: await loadFile(path.join(root, dir, 'template.ts')) || '',
        tests: await loadFile(path.join(root, dir, 'test-cases.ts')),
        solutions: {
          code: await loadFile(path.join(root, dir, 'solutions', 'index.ts')),
          readme: await loadFile(path.join(root, dir, 'solutions', 'index.ts')),
        },
      }
      return quiz
    }),
  )

  return quizes
}
