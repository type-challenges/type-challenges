/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

/**
 * @param {ReturnType<typeof import('@actions/github').getOctokit>} github
 * @param {typeof import('@actions/github').context} context
 * @param {typeof import('@actions/core')} core
 * @return {Promise<void>}
 */
module.exports = async(github, context, core) => {
  const payload = context.payload || {}
  const issue = payload.issue

  if (!issue)
    return

  /** @type {string[]} */
  const labels = (issue.labels || []).map(i => i && i.name).filter(Boolean)

  if (!labels.includes('new-challenge'))
    return

  // close pull request
  // Leave a message: close by issue
  const no = issue.number
  const action = payload.action

  core.info(`action: ${action}`)

  // action: reopened
  // action: closed

  // find pull request
  const { data: pulls } = await github.pulls.list({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: action === 'closed' ? 'open' : 'close',
  })

  core.info(`pulls.length ${pulls.length}`)
  core.info(JSON.stringify(pulls))

  const existing_pull = pulls.find(i =>
    i.user.login === 'github-actions[bot]'
    && i.title.startsWith(`#${no} `),
  )

  if (!existing_pull) {
    core.info('existing_pull not exist')
    return
  }

  core.info(JSON.stringify(context))

  if (context.payload.action === 'reopened') {
    await github.pulls.update({
      ...context.repo,
      pull_number: existing_pull.number,
      state: 'open',
    })
  }
  else {
    // close
    await github.pulls.update({
      ...context.repo,
      pull_number: existing_pull.number,
      state: 'closed',
    })
  }
}
