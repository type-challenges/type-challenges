import { DeepPartial } from 'utility-types'

export interface QuizMetaInfo {
  title: string
  author: {
    name: string
    email: string
    github: string
  }
  tsconfig: any
  original_issues: number[]
  recommended_solutions: number[]
}

export type Difficulty = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme' | 'pending'

export interface Quiz {
  no: number
  difficulty: Difficulty
  path: string
  readme: string
  template: string
  info?: DeepPartial<QuizMetaInfo>
  tests?: string
  solutions?: {
    code?: string
    readme?: string
  }
}
