"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get();
const result2 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 'last name')
    .get();
const result3 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 123)
    .get();
