/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const YAML = require('js-yaml')
const slug = require('slug')
const { PushCommit } = require('@type-challenges/octokit-create-pull-request')

/**
 * @param {ReturnType<typeof import('@actions/github').getOctokit>} github
 * @param {typeof import('@actions/github').context} context
 * @param {typeof import('@actions/core')} core
 * @return {Promise<void>}
 */
module.exports = async(github, context, core) => {
  // close pull request
  // Leave a message: close by issue
  const payload = context.payload || {}
  const issue = payload.issue
  const no = context.issue.number

  // find pull request
  const { data: pulls } = await github.pulls.list({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: 'open',
  })

  const existing_pull = pulls.find(i =>
    i.user.login === 'github-actions[bot]'
    && i.title.startsWith(`#${no} `),
  )

  if (!existing_pull)
    return

  core.info(JSON.stringify(existing_pull))

  if (!existing_pull.state === 'open')
    return

  // close
  await github.pulls.update({
    ...context.repo,
    pull_number: existing_pull.number,
    state: 'closed',
  })
}
