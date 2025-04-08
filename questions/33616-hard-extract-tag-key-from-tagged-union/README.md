A tagged union, or discriminated union, is a union type in which every member type is distinguishable by a property called the tag.

Write an `ExtractTagFromTaggedUnion` type that takes a tagged union and yields the name of the tag property.

* The tag must be a string.

```ts
type MyTaggedUnion = { type: 'position', position: [x: number, y: number]} | { type: 'direction', direction: [x: number, y: number]}
type Tag = ExtractTagFromTaggedUnion<MyTaggedUnion>; // 'type' expected.
```
