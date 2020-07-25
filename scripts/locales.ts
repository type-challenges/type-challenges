export const defaultLocale = 'en'

export const supportedLocales = ['en', 'zh-CN'] as const

// TODO: move to json files
export const messages = {
  en: {
    question: 'Question',
    'code-start': 'Your Code Here',
    'test-cases': 'Test Cases',
    'link-tip-repo': 'This is a part of Type Challenges: ',
  },
  'zh-CN': {
    question: '题目',
    'code-start': '你的代码',
    'test-cases': '测试用例',
    'link-tip-repo': '在 Type Challenges 查看更多姿势: ',
  },
}
