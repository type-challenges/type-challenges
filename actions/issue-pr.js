/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const YAML = require('js-yaml')
const slug = require('limax')
const { PushCommit } = require('@type-challenges/octokit-create-pull-request')

const Messages = {
  en: {
    info: 'Info',
    template: 'Template',
    tests: 'Test Cases',
    issue_reply: '#{0} - Pull Request created.',
    issue_update_reply: '#{0} - Pull Request updated.',
    issue_invalid_reply: 'Failed to parse the issue, please follow the template.',
  },
  'zh-CN': {
    info: '基本信息',
    template: '题目模版',
    tests: '判题测试',
    issue_reply: '#{0} - PR 已生成',
    issue_update_reply: '#{0} - PR 已更新',
    issue_invalid_reply: 'Issue 格式不正确，请按照依照模版修正',
  },
}

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
    const locale = labels.includes('zh-CN') ? 'zh-CN' : 'en'

    const body = issue.body || ''
    const infoRaw = getCodeBlock(body, Messages[locale].info, 'yaml')
    const template = getCodeBlock(body, Messages[locale].template, 'ts')
    const tests = getCodeBlock(body, Messages[locale].tests, 'ts')
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

    // invalid issue
    if (!question || !template || !tests || !info) {
      await updateComment(
        github,
        context,
        Messages[locale].issue_invalid_reply,
      )
      return
    }

    const { data: user } = await github.users.getByUsername({ username: issue.user.login })

    // allow user to override the author info when filled in the Issue
    if (!info.author) {
      info.author = info.author || {}
      info.author.github = issue.user.login
      if (user)
        info.author.name = user.name
    }

    const { data: pulls } = await github.pulls.list({
      owner: context.repo.owner,
      repo: context.repo.repo,
      state: 'open',
    })

    const existing_pull = pulls.find(i =>
      i.user.login === 'github-actions[bot]'
      && i.title.startsWith(`#${no} `),
    )

    const dir = `questions/${no}-${info.difficulty}-${slug(info.title.replace(/\./g, '-').replace(/<.*>/g, ''), { tone: false })}`
    const userEmail = `${user.id}+${user.login}@users.noreply.github.com`

    await PushCommit(github, {
      owner: context.repo.owner,
      repo: context.repo.repo,
      base: 'master',
      head: `pulls/${no}`,
      changes: {
        files: {
          [locale === 'en' ? `${dir}/info.yml` : `${dir}/info.${locale}.yml`]: `${YAML.safeDump(info)}\n`,
          [locale === 'en' ? `${dir}/README.md` : `${dir}/README.${locale}.md`]: `${question}\n`,
          [`${dir}/template.ts`]: `${template}\n`,
          [`${dir}/test-cases.ts`]: `${tests}\n`,
        },
        commit: `feat(question): add #${no} - ${info.title}`,
        author: {
          name: user.name,
          email: userEmail,
        },
      },
      fresh: !existing_pull,
    })

    if (existing_pull) {
      core.info('-----Pull Request Existed-----')
      core.info(JSON.stringify(existing_pull, null, 2))
      await updateComment(
        github,
        context,
        Messages[locale].issue_update_reply.replace('{0}', existing_pull.number.toString())
          + '\n\n'
          + getTimestampBadge(),
      )
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
        labels: ['auto-generated'],
      })

      core.info('-----Pull Request-----')
      core.info(JSON.stringify(pr, null, 2))

      if (pr) {
        await updateComment(
          github,
          context,
          Messages[locale].issue_reply.replace('{0}', pr.number.toString())
            + '\n\n'
            + getTimestampBadge(),
        )
      }
    }
  }
  else {
    core.info('No matched labels, skipped')
  }
}

/**
 * @param {ReturnType<typeof import('@actions/github').getOctokit>} github
 * @param {typeof import('@actions/github').context} context
 * @param {string} body
 */
async function updateComment(github, context, body) {
  const { data: comments } = await github.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  })

  const existing_comment = comments.find(i =>
    i.user.login === 'github-actions[bot]',
  )

  if (existing_comment) {
    return await github.issues.updateComment({
      comment_id: existing_comment.id,
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body,
    })
  }
  else {
    return await github.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body,
    })
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

function getTimestampBadge() {
  return `![${new Date().toISOString()}](https://img.shields.io/date/${Math.round(+new Date() / 1000)}?color=green&label=)`
}
