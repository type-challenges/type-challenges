type PartialObject = {
  a: number;
  b?: string;
  c: boolean;
  d?: symbol;
}

type YourType<T, K> = any

// 示例
type cases = [
  Expect<Equal<YourType<PartialObject, 'a' | 'c'>, { a: number; c: boolean; }>>,
  ExpectFalse<YourType<PartialObject, 'b' | 'd'>>,
]
