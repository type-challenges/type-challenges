import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]
type PartialModelEntries = ['name', string | undefined] | ['age', number | undefined] | ['locations', string[] | null | undefined]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, PartialModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]
