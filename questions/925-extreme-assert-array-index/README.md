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
