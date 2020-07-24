import path from 'path'
import { promises as fs } from 'fs'
import fg from 'fast-glob'
import YAML from 'js-yaml'
import { Quiz } from './types'

export async function loadQuizes(): Promise<Quiz[]> {
  const root = path.resolve(__dirname, '..')
  const folders = await fg('{0..9}-*/*', {
    onlyDirectories: true,
    cwd: root,
  })

  const quizes = await Promise.all(
    folders.map(async(dir) => {
      const quiz: Quiz = {
        no: Number(dir.replace(/^.*[\\/](\d+)-.*/, '$1')),
        difficulty: dir.replace(/^\d-(.+)[\\/].*$/, '$1') as any,
        path: dir,
        info: YAML.safeLoad(await fs.readFile(path.join(root, dir, 'info.yml'), 'utf-8')) as any,
        readme: await fs.readFile(path.join(root, dir, 'README.md'), 'utf-8'),
        template: await fs.readFile(path.join(root, dir, 'template.ts'), 'utf-8'),
        tests: await fs.readFile(path.join(root, dir, 'test-cases.ts'), 'utf-8'),
        solutions: {
          code: await fs.readFile(path.join(root, dir, 'solutions', 'index.ts'), 'utf-8'),
          readme: await fs.readFile(path.join(root, dir, 'solutions', 'index.ts'), 'utf-8'),
        },
      }
      return quiz
    }),
  )

  console.log(quizes)
  return quizes
}

loadQuizes()
