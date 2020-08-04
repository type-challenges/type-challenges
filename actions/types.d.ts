import type { getOctokit, context } from '@actions/github'
import type Core from '@actions/core'
import type IO from '@actions/io'

export type Github = ReturnType<typeof getOctokit>
export type Context = typeof context
export type Action = (github: Github, context: Context, core: typeof Core, io: typeof IO) => Promise<void>
