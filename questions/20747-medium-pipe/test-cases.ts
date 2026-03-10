import type { Equal, Expect } from '@type-challenges/utils'

const getString = () => "Hello World!";
const reverseString = (str: string) => Array.from(str).reverse().join("");
const getLength = (str: string) => str.length;
const addTen = (n: number) => n + 10;
const timesByTwo = (n: number) => n * 2;

const case1 = pipe();
const case2 = pipe(getString);
const case3 = pipe(getString, reverseString);
const case4 = pipe(reverseString);
const case5 = pipe(getString, reverseString, getLength, addTen, timesByTwo);
const case6 = pipe(addTen, timesByTwo);

type cases = [
  Expect<Equal<typeof case1, Expected1>>,
  Expect<Equal<typeof case2, Expected2>>,
  Expect<Equal<typeof case3, Expected3>>,
  Expect<Equal<typeof case4, Expected4>>,
  Expect<Equal<typeof case5, Expected5>>,
  Expect<Equal<typeof case6, Expected6>>
]

pipe(
  getString,
  // @ts-expect-error
  addTen
);
pipe(
  addTen,
  // @ts-expect-error
  getLength
);
pipe(
  timesByTwo,
  addTen,
  // @ts-expect-error
  reverseString
);

type Expected1 = () => void;
type Expected2 = () => string;
type Expected3 = () => string;
type Expected4 = (str: string) => string;
type Expected5 = () => number;
type Expected6 = (n: number) => number;
