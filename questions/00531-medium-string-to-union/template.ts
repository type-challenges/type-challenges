/*
Implement the String to Union type. Type take string argument. The output should be a union of input letters

For example

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
*/

type StringToUnion<T extends string> = T extends `${infer Top}${infer Tail}`
  ? Top | StringToUnion<Tail>
  : never

// T will extend the first character and the following characters
// If True, output Top | and recursively run the Tail through StringToUnion
// Otherwise, don't return anything because it's already finished.
