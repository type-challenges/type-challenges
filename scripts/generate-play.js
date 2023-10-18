"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
const crypto_1 = __importDefault(require("crypto"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const picocolors_1 = __importDefault(require("picocolors"));
const prompts_1 = __importDefault(require("prompts"));
const formatToCode_1 = require("./actions/utils/formatToCode");
const loader_1 = require("./loader");
const locales_1 = require("./locales");
const issue_pr_1 = require("./actions/issue-pr");
function calculateFileHash(filePathFull) {
    return new Promise((resolve, reject) => {
        const hash = crypto_1.default.createHash('sha1');
        const fileStream = fs_extra_1.default.createReadStream(filePathFull);
        fileStream.on('data', (data) => {
            hash.update(data);
        });
        fileStream.on('end', () => {
            hash.update(filePathFull);
            resolve(hash.digest('hex'));
        });
        fileStream.on('error', (err) => {
            reject(err);
        });
    });
}
async function takeSnapshot(quizesPath) {
    let snapshot = {};
    const files = fs_extra_1.default.readdirSync(quizesPath);
    for (const file of files) {
        // Might be a file, or a folder
        const fPath = path_1.default.join(quizesPath, file);
        const fStats = fs_extra_1.default.statSync(fPath);
        if (fStats.isDirectory()) {
            snapshot = Object.assign(Object.assign({}, snapshot), (await takeSnapshot(fPath)));
        }
        else {
            snapshot[file] = await calculateFileHash(fPath);
        }
    }
    return snapshot;
}
function readPlaygroundCache(playgroundCachePath) {
    if (!fs_extra_1.default.existsSync(playgroundCachePath))
        return {};
    try {
        const rawCacheContent = fs_extra_1.default.readFileSync(playgroundCachePath);
        return JSON.parse(rawCacheContent.toString());
    }
    catch (err) {
        console.log(picocolors_1.default.red('Playground cache corrupted. '
            + 'Cannot generate playground without keeping your changes intact'));
        console.log(picocolors_1.default.cyan('Please ensure you have run this: "pnpm generate"'));
        process.exit(1);
    }
}
function calculateOverridableFiles(cache, snapshot) {
    const result = {};
    for (const quizName in snapshot) {
        if (snapshot[quizName] === cache[quizName])
            result[quizName] = snapshot[quizName];
    }
    return result;
}
function isQuizWritable(quizFileName, overridableFiles, playgroundSnapshot) {
    return !!(overridableFiles[quizFileName]
        || (!overridableFiles[quizFileName] && !playgroundSnapshot[quizFileName]));
}
async function generatePlayground() {
    const playgroundPath = path_1.default.join(__dirname, '../playground');
    const playgroundCachePath = path_1.default.join(__dirname, '../.playgroundcache');
    let locale = locales_1.supportedLocales.find(locale => locale === process_1.argv[2]);
    console.log(picocolors_1.default.bold(picocolors_1.default.cyan('Generating local playground...\n')));
    let overridableFiles;
    let keepChanges = false;
    const currentPlaygroundCache = readPlaygroundCache(playgroundCachePath);
    let playgroundSnapshot;
    if (process_1.argv.length === 3 && (process_1.argv[2] === '--keep-changes' || process_1.argv[2] === '-K')) {
        console.log(picocolors_1.default.bold(picocolors_1.default.cyan('We will keep your chanegs while generating.\n')));
        keepChanges = true;
        playgroundSnapshot = await takeSnapshot(playgroundPath);
        overridableFiles = calculateOverridableFiles(currentPlaygroundCache, playgroundSnapshot);
    }
    else if (fs_extra_1.default.existsSync(playgroundPath)) {
        const result = await (0, prompts_1.default)([{
                name: 'confirm',
                type: 'confirm',
                initial: false,
                message: 'The playground directory already exists, it may contains the answers you did. Do you want to override it?',
            }]);
        if (!(result === null || result === void 0 ? void 0 : result.confirm))
            return console.log(picocolors_1.default.yellow('Skipped.'));
    }
    if (!locale) {
        const result = await (0, prompts_1.default)([{
                name: 'locale',
                type: 'select',
                message: 'Select language:',
                choices: locales_1.supportedLocales.map(i => ({
                    title: i,
                    value: i,
                })),
            }]);
        if (!result)
            return console.log(picocolors_1.default.yellow('Skipped.'));
        locale = result.locale;
    }
    if (!keepChanges) {
        await fs_extra_1.default.remove(playgroundPath);
        await fs_extra_1.default.ensureDir(playgroundPath);
    }
    const quizes = await (0, loader_1.loadQuizes)();
    const incomingQuizesCache = {};
    for (const quiz of quizes) {
        const { difficulty, title } = (0, loader_1.resolveInfo)(quiz, locale);
        const code = (0, formatToCode_1.formatToCode)(quiz, locale);
        if (difficulty === undefined || title === undefined) {
            console.log(picocolors_1.default.yellow(`${quiz.no} has no ${locale.toUpperCase()} version. Skipping`));
            continue;
        }
        const quizesPathByDifficulty = path_1.default.join(playgroundPath, difficulty);
        const quizFileName = `${(0, issue_pr_1.getQuestionFullName)(quiz.no, difficulty, title)}.ts`;
        const quizPathFull = path_1.default.join(quizesPathByDifficulty, quizFileName);
        if (!keepChanges || (keepChanges && isQuizWritable(quizFileName, overridableFiles, playgroundSnapshot))) {
            if (!fs_extra_1.default.existsSync(quizesPathByDifficulty))
                fs_extra_1.default.mkdirSync(quizesPathByDifficulty);
            await fs_extra_1.default.writeFile(quizPathFull, code, 'utf-8');
            incomingQuizesCache[quizFileName] = await calculateFileHash(quizPathFull);
        }
    }
    fs_extra_1.default.writeFile(playgroundCachePath, JSON.stringify(Object.assign(Object.assign({}, currentPlaygroundCache), incomingQuizesCache)));
    console.log();
    console.log(picocolors_1.default.bold(picocolors_1.default.green('Local playground generated at: ')) + picocolors_1.default.dim(playgroundPath));
    console.log();
}
generatePlayground();
