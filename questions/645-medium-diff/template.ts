type Diff<O, O1> = any

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type test0 = Diff<Foo, Bar>   // { gender: number }
