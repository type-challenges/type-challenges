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
  const payload = context.payload || {}
  const issue = payload.issue
  const no = context.issue.number

  if (!issue)
    return

  /** @type {string[]} */
  const labels = (issue.labels || []).map(i => i && i.name).filter(Boolean)

  // create pr for new challenge
  if (labels.includes('new-challenge')) {
    const body = issue.body || ''
    const infoRaw = getCodeBlock(body, 'Info', 'yaml')
    const template = getCodeBlock(body, 'Template', 'ts')
    const tests = getCodeBlock(body, 'Test Cases', 'ts')
    const question = getCommentRange(body, 'question')

    /** @type {any} */
    let info = {}

    try {
      info = YAML.safeLoad(infoRaw || '')
    }
    catch {
      info = null
    }

    core.info('-----Playload-----')
    core.info(JSON.stringify(context.payload, null, 2))

    core.info('-----Parsed-----')
    core.info(
      JSON.stringify({
        info,
        template,
        tests,
        question,
      }, null, 2),
    )

    if (!question || !template || !tests || !info)
      return // TODO: warn user

    const { data: user } = await github.users.getByUsername({ username: issue.user.login })

    info.author = info.author || {}
    info.author.github = issue.user.login
    if (user)
      info.author.name = user.name

    const { data: pulls } = await github.pulls.list({
      owner: context.repo.owner,
      repo: context.repo.repo,
      state: 'open',
    })

    const existing_pull = pulls.find(i =>
      i.user.login === 'github-actions[bot]'
      && i.title.startsWith(`#${no} `),
    )

    const dir = `questions/${no}-${slug(info.title)}`
    const userEmail = `${user.id}+${user.login}@users.noreply.github.com`

    await PushCommit(github, {
      owner: context.repo.owner,
      repo: context.repo.repo,
      base: 'master',
      head: `pulls/${no}`,
      changes: {
        files: {
          [`${dir}/info.yml`]: `${YAML.safeDump(info)}\n`,
          [`${dir}/README.md`]: `${question}\n`,
          [`${dir}/template.ts`]: `${template}\n`,
          [`${dir}/test-cases.ts`]: `${tests}\n`,
        },
        commit: `feat(question): add #${no} - ${info.title}\n\nCo-authored-by: ${user.name} <${userEmail}>`,
      },
      fresh: !existing_pull,
    })

    if (existing_pull) {
      core.info('-----Pull Request Existed-----')
      core.info(JSON.stringify(existing_pull, null, 2))
    }
    else {
      core.info('-----Creating PR-----')
      const { data: pr } = await github.pulls.create({
        owner: context.repo.owner,
        repo: context.repo.repo,
        base: 'master',
        head: `pulls/${no}`,
        title: `#${no} - ${info.title}`,
        body: `This is an auto-generated PR that auto reflect on #${no}, please go to #${no} for discussion or making changes.\n\nCloses #${no}`,
        labels: ['auto-generated']
      })

      core.info('-----Pull Request-----')
      core.info(JSON.stringify(pr, null, 2))

      if (pr) {
        await github.issues.createComment({
          issue_number: context.issue.number,
          owner: context.repo.owner,
          repo: context.repo.repo,
          body: `Pull Request created at #${pr.number}!`,
        })
      }
    }
  }
  else {
    core.info('No matched labels, skipped')
  }
}

/**
 * @param {string} text
 * @param {string} title
 * @param {?string} lang
 */
function getCodeBlock(text, title, lang = 'ts') {
  const regex = new RegExp(`## ${title}[\\s\\S]*?\`\`\`${lang}([\\s\\S]*?)\`\`\``)
  const match = text.match(regex)
  if (match && match[1])
    return match[1].toString().trim()
  return null
}

/**
 * @param {string} text
 * @param {string} key
 */
function getCommentRange(text, key) {
  const regex = new RegExp(`<!--${key}-start-->([\\s\\S]*?)<!--${key}-end-->`)
  const match = text.match(regex)
  if (match && match[1])
    return match[1].toString().trim()
  return null
}
