/*
Implement the JavaScript Array.includes function in the type system.
A type takes the two arguments.
The output should be a boolean true or false.

For example:

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

*/

type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false
// this solution makes sense to me but the test's rigidity fails some cases where it should not
