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
