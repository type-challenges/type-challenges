import { Expect, Equal } from "@type-challenges/utils";

/* prettier-ignore */
{
  type N1 = Expect<
    Equal<
      Pascal<1>,
      [
        [1],
      ]
    >
  >;
  type N3 = Expect<
    Equal<
      Pascal<3>,
      [
            [1],
          [1, 1],
        [1, 2, 1],
      ]
    >
  >;
  type N5 = Expect<
    Equal<
      Pascal<5>,
      [
                [1],
              [1, 1],
            [1, 2, 1],
          [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ]
    >
  >;
  type N7 = Expect<
    Equal<
      Pascal<7>,
      [
                    [1],
                  [1, 1],
                [1, 2, 1],
              [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
          [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >;
}
