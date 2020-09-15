**This challenge continues from [6 - Simple Vue](//tsch.js.org/6), you should finish that one first, and modify your code based on it to start this challenge**.

In addition to the Simple Vue, we are now having a new `props` field in the options. This is a simplified version of Vue's `props` option. Here are some of the rules.

`props` is an object containing each field as the key of the real props injected into `this`. The injected props will be accessible in all the context including `data`, `computed`, and `methods`.

A prop will be defined either by a constructor or an object with a `type` field containing constructor(s).

For example

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

should be inferred to `type Props = { foo: boolean }`.

When passing multiple constructors, the type should be inferred to a union.

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

When an empty object is passed, the key should be inferred to `any`.

For more specified cases, check out the Test Cases section.

> `required`, `default`, and array props in Vue are not considered in this challenge.
