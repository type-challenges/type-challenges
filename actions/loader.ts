import * as core from '@actions/core'
import { context, getOctokit } from '@actions/github'
import * as io from '@actions/io'

process.on('unhandledRejection', handleError)
main().catch(handleError)

async function main(): Promise<void> {
  core.info(`argv ${JSON.stringify(process.argv)}`)

  const token = process.argv[1]
  const fnName = process.argv[2]
  const github = getOctokit(token)

  const fn = await import(`./${fnName}.ts`)
  fn(github, context, core, io)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(err: any): void {
  console.error(err)
  core.setFailed(`Unhandled error: ${err}`)
}
