import { Equal, Expect } from '@type-challenges/utils'

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

type cases = [
  Expect<Equal<PromiseAll([promise1, promise2, promise3] as const), Promise<[3, 42, string]>>>
]
