<!--info-header-start--><h1>Tag <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> </h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/697/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Despite the structural typing system in TypeScript, it is sometimes convenient to mark some types with tags, and so that these tags do not interfere with the ability to assign values  of these types to each other.

For example, using tags, you can check that some value passes through the calls of the required functions, and in the correct order:
```ts
const doA = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'A'>
}

const doB = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'B'>
};

const a = doA('foo')
const b = doB(a)

type Check0 = IsTrue<HasTags<typeof b, ['A', 'B']>>
```

Write a function `Tag<B, T extends string>` that takes a type `B` other than `null` and `undefined` and returns a type labeled with the string literal type `T`.

The labeled types must be mutually assignable with the corresponding original types:
```ts
declare let x: string
declare let y: Tag<string, 'A'>

x = y = x
```

When tagging a type already marked with a tag, a new tag must be added to the end of the list of all tags of the type:
```ts
type T0 = Tag<{ foo: string }, 'A'>
type T1 = Tag<T0, 'B'>

type Check1 = IsTrue<HasExactTags<T1, ['A', 'B']>>
```

Add some functions to check for type tags.

`GetTags<B>` retrieves a list of all tags of a type `B`:
```ts
type T2 = Tag<number, 'C'>

type Check2 = IsTrue<Equal<GetTags<T2>, ['C']>>
```

`HasTag<B, T extends string>` checks if type `B` is tagged with tag `T` (and returns `true` or `false`):
```ts
type T3 = Tag<0 | 1, 'D'>

type Check3 = IsTrue<HasTag<T3, 'D'>>
```

`HasTags<B, T extends readonly string[]>` checks if type `B` is tagged in succession with tags from tuple `T`:
```ts
type T4 = Tag<Tag<Tag<{}, 'A'>, 'B'>, 'C'>

type Check4 = IsTrue<HasTags<T4, ['B', 'C']>>
```

`HasExactTags<B, T extends readonly string[]>` checks if the list of all tags of type `B` is exactly equal to the `T` tuple:
```ts
type T5 = Tag<Tag<unknown, 'A'>, 'B'>

type Check5 = IsTrue<HasExactTags<T5, ['A', 'B']>>
```

Finally, add type `UnTag<B>`, which removes all tags from type `B`:
```ts
type T6 = Tag<{ bar: number }, 'A'>
type T7 = UnTag<T6>

type Check6 = IsFalse<HasTag<T7, 'A'>>
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/697/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/697/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->