import * as core from '@actions/core'
import { context, getOctokit } from '@actions/github'
import * as io from '@actions/io'

process.on('unhandledRejection', handleError)
main().catch(handleError)

type Options = {
  log?: Console
  userAgent?: string
  previews?: string[]
}

async function main(): Promise<void> {
  const token = core.getInput('github-token', { required: true })
  const debug = core.getInput('debug')
  const userAgent = core.getInput('user-agent')
  const previews = core.getInput('previews')

  const opts: Options = {}
  if (debug === 'true') opts.log = console
  if (userAgent != null) opts.userAgent = userAgent
  if (previews != null) opts.previews = previews.split(',')

  const github = getOctokit(token, opts)

  core.info(`argv ${JSON.stringify(process.argv)}`)

  const fn = await import(`./${process.argv[1]}.ts`)
  fn(github, context, core, io)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(err: any): void {
  console.error(err)
  core.setFailed(`Unhandled error: ${err}`)
}
