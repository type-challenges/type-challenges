"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action = async (github, context, core) => {
    const payload = context.payload;
    const issue = payload.issue;
    if (!issue)
        return;
    const labels = (issue.labels || [])
        .map((i) => i && i.name)
        .filter(Boolean);
    if (labels.includes('answer')) {
        const match = issue.title.match(/^(\d+) - /);
        if (match && match[1]) {
            const no = Number(match[1]);
            if (isNaN(no))
                return;
            const name = no.toString();
            if (labels.includes('trigger-bot')) {
                await github.rest.issues.removeLabel({
                    issue_number: context.issue.number,
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    name: 'trigger-bot',
                });
            }
            if (labels.includes(name))
                return;
            try {
                await github.rest.issues.getLabel({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    name,
                });
            }
            catch (_a) {
                await github.rest.issues.createLabel({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    name,
                    color: 'ffffff',
                });
            }
            await github.rest.issues.addLabels({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                labels: [name],
            });
        }
    }
    else {
        core.info('No matched labels, skipped');
    }
};
exports.default = action;
