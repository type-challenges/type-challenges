import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

interface TestCase1 {
    a: number;
    b: string;
    c: 'this is c';
    d: () => void;
}

type cases = [
  Expect<Equal<ObjectValues<TestCase1> , [number, string,'this is c', () => void]>>,
  Expect<Equal<ObjectValues<TestCase1,'a'|'b'|'d'> , [number, string, () => void]>>,
  Expect<Equal<ObjectValues<TestCase1,"d"|"a"> ,[() => void, number]>>,// Add a little more difficulty (optional)
]
