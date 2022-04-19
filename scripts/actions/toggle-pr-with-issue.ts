import type { Action } from '../types'

const action: Action = async(github, context, core) => {
  const payload = context.payload || {}
  const issue = payload.issue

  if (!issue)
    return

  const labels: string[] = (issue.labels || [])
    .map((i: any) => i && i.name)
    .filter(Boolean)

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
  const { data: pulls } = await github.rest.pulls.list({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: action === 'closed' ? 'open' : 'closed',
  })

  core.info(`pulls.length ${pulls.length}`)
  core.info(JSON.stringify(pulls))

  const existing_pull = pulls.find(i =>
    i.user?.login === 'github-actions[bot]'
    && i.title.startsWith(`#${no} `),
  )

  if (!existing_pull) {
    core.info('existing_pull not exist')
    return
  }

  core.info(JSON.stringify(context))

  if (context.payload.action === 'reopened') {
    await github.rest.pulls.update({
      ...context.repo,
      pull_number: existing_pull.number,
      state: 'open',
    })
  }
  else {
    // close
    await github.rest.pulls.update({
      ...context.repo,
      pull_number: existing_pull.number,
      state: 'closed',
    })
  }
}

export default action
