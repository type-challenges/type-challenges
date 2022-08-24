/*
Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

For example

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
*/

type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S

// Grab the 1st char and then the rest
// if true Uppercase 1st
// If not true just return the char
