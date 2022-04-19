import type { Action } from '../types'

const action: Action = async(github, context, core) => {
  const payload = context.payload
  const issue = payload.issue

  if (!issue)
    return

  const labels: string[] = (issue.labels || [])
    .map((i: any) => i && i.name)
    .filter(Boolean)

  if (labels.includes('answer')) {
    const match = issue.title.match(/^(\d+) - /)
    if (match && match[1]) {
      const no = Number(match[1])
      if (isNaN(no))
        return

      const name = no.toString()

      if (labels.includes('trigger-bot')) {
        await github.rest.issues.removeLabel({
          issue_number: context.issue.number,
          owner: context.repo.owner,
          repo: context.repo.repo,
          name: 'trigger-bot',
        })
      }

      if (labels.includes(name))
        return

      try {
        await github.rest.issues.getLabel({
          owner: context.repo.owner,
          repo: context.repo.repo,
          name,
        })
      }
      catch {
        await github.rest.issues.createLabel({
          owner: context.repo.owner,
          repo: context.repo.repo,
          name,
          color: 'ffffff',
        })
      }

      await github.rest.issues.addLabels({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        labels: [name],
      })
    }
  }
  else {
    core.info('No matched labels, skipped')
  }
}

export default action
