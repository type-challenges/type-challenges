"use strict";
const matrix = [
    [3, 4],
    [5, 6],
    [7, 8],
];
assertArrayIndex(matrix, 'rows');
let sum = 0;
for (let i = 0; i < matrix.length; i += 1) {
    const columns = matrix[i];
    // @ts-expect-error: number | undefined in not assignable to number
    const x = matrix[0];
    assertArrayIndex(columns, 'columns');
    for (let j = 0; j < columns.length; j += 1) {
        sum += columns[j];
        // @ts-expect-error: number | undefined in not assignable to number
        const y = columns[i];
        // @ts-expect-error: number | undefined in not assignable to number
        const z = columns[0];
        // @ts-expect-error: number[] | undefined in not assignable to number[]
        const u = matrix[j];
    }
}
const a = [];
assertArrayIndex(a, 'a');
for (let p = 0; p < a.length; p += 1) {
    const value = a[p];
    // @ts-expect-error: string | undefined is not assignable to string
    const z = a[2];
}
a.push('qux');
// @ts-expect-error: number is not assignable to string
a.push(3);
for (const value of a) {
    const other = value;
}
const b = [];
assertArrayIndex(b, 'b');
for (let p = 0; p < b.length; p += 1) {
    // @ts-expect-error: number | undefined is not assignable to string
    const value = b[p];
}
const c = [];
assertArrayIndex(c, 'c');
for (let p = 0; p < c.length; p += 1) {
    // @ts-expect-error: string | undefined is not assignable to string
    let value = c[p];
    // @ts-expect-error: string | undefined is not assignable to string
    value = c[0];
}
const d = [];
assertArrayIndex(d, 'd');
for (let p = 0; p < d.length; p += 1) {
    const value = d[p];
    // @ts-expect-error: only permits reading
    d[2] = 3;
}
// @ts-expect-error: push does not exist on readonly
d.push(3);
const e = [0];
// @ts-expect-error: [number] is not assignable to never
assertArrayIndex(e, 'e');
const f = [false];
// @ts-expect-error: [boolean] is not assignable to never
assertArrayIndex(f, 'f');
const tuple = [5, 7];
// @ts-expect-error: readonly [5, 7] is not assignable to never
assertArrayIndex(tuple, 'tuple');
