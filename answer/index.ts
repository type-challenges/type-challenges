type KeyValueSameDict<Keys extends string> = {
  [v in Keys]?: v
}

function inferGeneric<T extends string>(t: KeyValueSameDict<T>) {
  return t
}

const foo = inferGeneric({ foo: "foo", bar: "bar" } as const)
