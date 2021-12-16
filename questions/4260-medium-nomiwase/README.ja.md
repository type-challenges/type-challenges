指定された文字列に含まれる文字をそれぞれ最大で1度だけ使った文字列のすべての組み合わせの型`AllCombinations`を実装します。

例えば

```ts

type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```
