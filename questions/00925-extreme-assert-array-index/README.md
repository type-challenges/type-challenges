<!--info-header-start--><h1>Assert Array Index <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/925/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Sometimes we want to use the good old `for`-loop with an index to traverse the array, but in this case TypeScript does not check in any way that we are accessing the elements of the array at its real index (not exceeding the length of the array), and that we are not using an arbitrary number as an index, or index from another array (for nested loops, for traversing matrices or graphs):
```ts
const matrix = [
    [3, 4],
    [5, 6],
    [7, 8],
];

// This example contains no type errors when the noUncheckedIndexedAccess option is off.
for (let i = 0; i < matrix.length; i += 1) {
    const columns: number[] = matrix[i];

    for (let j = 0; j < columns.length; j += 1) {
        const current: number = columns[i]; // oops! i instead of j

        console.log(
            current.toFixed(), // TypeError: Cannot read property 'toFixed' of undefined
        );
    }
}
```

You can enable the [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) option (in `tsconfig.json`), but then each time you access an array element, you will need to check that this element exists, which is somewhat verbose and inconvenient, especially since in the case of such a `for`-traversal, we are sure that the index does not exceed the length of the array:
```ts
const numbers = [5, 7];

for (let i = 0; i < numbers.length; i += 1) {
    const current = numbers[i];

    if (current !== undefined) {
        console.log(current.toFixed());
    }
}
```

Write an `assert`-function `assertArrayIndex(array, key)` that can be applied to any `array` (with an arbitrary unique string `key`, which is needed to distinguish arrays at the type level) to allow access to the elements of this array only by the index obtained from array by the special generic type `Index<typeof array>` (this functionality requires enabling the [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) option in `tsconfig.json`):
```ts
const numbers = [5, 7];

assertArrayIndex(numbers, 'numbers');

for (let i = 0 as Index<typeof numbers>; i < numbers.length; i += 1) {
    console.log(numbers[i].toFixed());
}
```

When accessing by such an index, it must be guaranteed that an element in the array exists, and when accessing an array by any other indices, there is no such guarantee (the element may not exist):
```ts
const matrix = [
    [3, 4],
    [5, 6],
    [7, 8],
];

assertArrayIndex(matrix, 'rows');

let sum = 0;

for (let i = 0 as Index<typeof matrix>; i < matrix.length; i += 1) {
    const columns: number[] = matrix[i];

    // @ts-expect-error: number | undefined in not assignable to number
    const x: number[] = matrix[0];

    assertArrayIndex(columns, 'columns');

    for (let j = 0 as Index<typeof columns>; j < columns.length; j += 1) {
        sum += columns[j];

        // @ts-expect-error: number | undefined in not assignable to number
        const y: number = columns[i];

        // @ts-expect-error: number | undefined in not assignable to number
        const z: number = columns[0];

        // @ts-expect-error: number[] | undefined in not assignable to number[]
        const u: number[] = matrix[j];
    }
}
```

The `assertArrayIndex` function cannot be called on tuples (since the accessing the elements is already well typed in them):
```ts
const tuple = [5, 7] as const;

// @ts-expect-error
assertArrayIndex(tuple, 'tuple');
```

(Additional design considerations for the proposed API: [#925](https://github.com/type-challenges/type-challenges/issues/925#issuecomment-780889329).)


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/925/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/925/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
