import { Equal, Expect } from '@type-challenges/utils'

type M1 = {
    a:string,
    b:string,
    c:string
}

type M2 = {
    a:number,
    c:boolean
}

type cases = [
  Expect<Equal<MergeUnionTypes<M1,M2>, {
      a:string|number,
      b:string,
      c:boolean|boolean
  }>>,
]
