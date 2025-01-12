import type { Equal, Expect } from '@type-challenges/utils'

const toLowerCase: ToLowerCase = () => (s): any => s.toLowerCase();
const repeat: Repeat = (count) => (s): any => s.repeat(count);
const concat: Concat = (...strings) => (s): any => s.concat(...strings);
const mapArray: MapArray = (t, m): any => t.map(m);

const lowercased1 = mapArray(['Hello', 'World'] as const, toLowerCase());
const repeated1 = mapArray(lowercased1, repeat(2));
const concatenated1 = mapArray(repeated1, concat('!'));

const lowercased2 = mapArray(['HOF'] as const, toLowerCase());
const repeated2 = mapArray(lowercased2, repeat(3));
const concatenated2 = mapArray(repeated2, concat('.', '?'));

const lowercased3 = mapArray(['HOF'], toLowerCase());
const repeated3 = mapArray(lowercased3, repeat(3));
const concatenated3 = mapArray(repeated3, concat('.', '?'));

const lowercased4 = toLowerCase()('TS');
const repeated4 = repeat(19)(lowercased4);
const concatenated4 = concat('!', '?')(repeated4);

type cases = [
  Expect<Equal<typeof lowercased1, ['hello', 'world']>>,
  Expect<Equal<typeof repeated1, ['hellohello', 'worldworld']>>,
  Expect<Equal<typeof concatenated1, ['hellohello!', 'worldworld!']>>,
  Expect<Equal<typeof lowercased2, ['hof']>>,
  Expect<Equal<typeof repeated2, ['hofhofhof']>>,
  Expect<Equal<typeof concatenated2, ['hofhofhof.?']>>,
  Expect<Equal<typeof lowercased3, string[]>>,
  Expect<Equal<typeof repeated3, string[]>>,
  Expect<Equal<typeof concatenated3, string[]>>,
  Expect<Equal<typeof lowercased4, 'ts'>>,
  Expect<Equal<typeof repeated4, 'tststststststststststststststststststs'>>,
  Expect<Equal<typeof concatenated4, 'tststststststststststststststststststs!?'>>,
];
