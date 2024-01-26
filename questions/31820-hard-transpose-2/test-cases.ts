import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Transposed<[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]>, [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]>>,
  Expect<Equal<Transposed<[
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
  ]>, [
    ['a', 'e', 'i'],
    ['b', 'f', 'j'],
    ['c', 'g', 'k'],
    ['d', 'h', 'l']
  ]>>,
  Expect<Equal<Transposed<[
    [1, 2, 3],
    [4, 5]
  ]>, [
    [1, 4],
    [2, 5],
    [3]
  ]>>,
  Expect<Equal<Transposed<number[][]>, number[][]>>,
  Expect<Equal<Transposed<[
    [1, 2],
    [3],
    [4, 5]
  ]>, [
    [1, 3, 4],
    [2, undefined, 5]
  ]>>,
  Expect<Equal<Transposed<[
    [1, 2],
    [3],
    ...[4][],
  ]>, [
    [1, 3, ...4[]],
    [2]
  ]>>,
  Expect<Equal<Transposed<[
    [1, 2],
    [3],
    ...[4, 5, 6][],
  ]>, [
    [1, 3, ...4[]],
    [2, undefined, ...5[]],
    [undefined, undefined, ...6[]]
  ]>>,
  Expect<Equal<Transposed<[
    [1, 2, 3],
    [4],
    ...[5][],
    [6, 7]
  ]>, [
    [1, 4, ...5[], 6],
    [2, undefined, ...undefined[], 7],
    [3]
  ]>>,
  Expect<Equal<Transposed<[
    [1, ...2[]],
    [3, 4, ....5[]]
  ]>, [
    [1, 3],
    [2 | undefined, 4],
    ...[2 | undefined, 5 | undefined][]
  ]>>,
  Expect<Equal<Transposed<[
    [1, ...2[], 3],
    [4, 5, ....6[], 7, 8],
    [...9[], 0]
  ]>, [
    [1, 4, 9 | 0],
    [2 | 3, 5, 9 | 0 | undefined],
    [2 | 3 | undefined , 6 | 7, 9 | 0 | undefined],
    [2 | 3 | undefined , 6 | 7 | 8, 9 | 0 | undefined],
    ...[2 | 3 | undefined , 6 | 7 | 8 | undefined, 9 | 0 | undefined][]
  ]>>,
  Expect<Equal<Transposed<[
    [1, 2],
    ...[3, ...4[]][]
  ]>, [
    [1, ...3[]],
    [2, ...4[]],
    ...[undefined, ...4[]][]
  ]>>,
  Expect<Equal<Transposed<
    [1, 2, 3][]
  >, [
    1[],
    2[],
    3[]
  ]>>,
  Expect<Equal<Transposed<[
    [1],
    ...[2, ...3[], 4, 5][],
    [6, 7, ...8[], 9]
  ]>, [
    [1, ...2[], 6],
    [undefined, ...(3 | 4)[], 7],
    [undefined, ...(3 | 4 | 5)[], 8 | 9],
    ...[undefined, ...(3 | 4 | 5 | undefined)[], 8 | 9 | undefined][]
  ]>>
]
