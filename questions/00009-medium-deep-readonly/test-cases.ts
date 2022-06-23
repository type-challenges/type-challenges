import { Equal, Expect } from '@type-challenges/utils';

type extraType<T> = T extends Function ? true : false;

type DeepReadonly<T> = extraType<T> extends true
  ? T
  : {
      readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P];
    };

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        },
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        },
      ];
    };
  };
};
