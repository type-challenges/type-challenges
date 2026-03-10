import type { Equal, Expect } from '@type-challenges/utils'

type Foo = { type: 'foo', foo: 'hello' } | { type: 'bar', bar: 'world' };
type Bar = { foo: 'foo' } | { bar: 'bar' };
type Baz = { type: 'number', value: number } | { type: 'string', value: string };
type Qux = { type: 'position', position: [x: number, y: number]} | { type: 'direction', direction: [x: number, y: number]}
type Quux = { type: 'position', value: [x: number, y: number]} | { type: 'direction', value: [x: number, y: number]}
type Corge = { seq: '1', type: 'one' } | { seq: '2', type: 'two' };
type Grault = { type: 'A', value: number } | { type: 'B', value: number } | { type: 'B', value: string }
type Garply = { type: 'only' };
type Waldo = { type: string };
type Fred = { type: 1 } | { type: '2' };
type Plugh = {};
type Xyzzy = { type: 'same', same: number } | { type: 'same', same: number };
type Thud = { type: 'same', same: number } | { type: 'same', same: number, really: false };

type cases = [
  Expect<Equal<ExtractTagFromTaggedUnion<Foo>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Bar>, never>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Baz>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Qux>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Quux>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Corge>, 'seq' | 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Grault>, never>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Garply>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Waldo>, never>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Fred>, never>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Plugh>, never>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Xyzzy>, 'type'>>,
  Expect<Equal<ExtractTagFromTaggedUnion<Thud>, never>>,
]
