import type { Equal, Expect, NotEqual } from "@type-challenges/utils"

type Dog = { kind: "aaa"; hight: number }
type DogProperty = keyof Dog
type keyofTest = Expect<Equal<DogProperty, "kind" | "hight">>
type Dog2 = { [P in DogProperty]: Dog[P] }
type mappedTest = Expect<Equal<Dog, Dog2>>
type Dog3 = { [P in DogProperty]: Dog[P] extends number ? string : Dog[P] }
type conditionalTest = Expect<NotEqual<Dog, Dog3>>

type LiteralUnion = "a" | "b" | "c"
type x = keyof LiteralUnion
type y = Expect<Equal<"a" extends LiteralUnion ? true : false, true>>
type z = Expect<Equal<LiteralUnion extends "a" ? true : false, true>>
