import type { getOctokit, context as Context } from '@actions/github'
import type Core from '@actions/core'

export default async(github: ReturnType<typeof getOctokit>, context: typeof Context, core: typeof Core) => {
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

      if (labels.includes(name))
        return

      try {
        await github.issues.getLabel({
          owner: context.repo.owner,
          repo: context.repo.repo,
          name,
        })
      }
      catch {
        await github.issues.createLabel({
          owner: context.repo.owner,
          repo: context.repo.repo,
          name,
          color: 'ffffff',
        })
      }

      await github.issues.addLabels({
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
