import type { Equal, Expect } from '@type-challenges/utils'

type Combination<T extends string[], All = T[number], Item = All>
  = Item extends infer Item extends string
    ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never
    
type t = Combination<['1', '2']>
// Combination<['1','2'],'1' | '2', '1' | '2'>
// '1' | '2' | `1 ${Combination<[],'2','2'>}`
// '1' | '2' |  `1 2 | Combination<[],'',''>`
// '1' | '2' |  '1 2'
 
type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]
