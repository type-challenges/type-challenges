// Compute the length of a string literal, which behaves like String#length.

type StringLength<S extends string, A extends string[] = []> = S extends `${infer Top}${infer Tail}`
  ? StringLength<Tail, [Top, ...A]>
  : A['length']
// type StringLength<S extends string> = S['length] will evaluate to a number type

// This is a recursive type that relies on a counter. TypeScript doesn't inherently provide this ability.
// So create a counter using a tuple, and return the length of the tuple.
// However, this breaks the test cases because another parameter is introduced.
// So set A extends string[] = []. Setting it to an empty tuple bypasses the test errors.
// Now we have a tuple where we can store characters.
// Count the first character as Top. Recursively send Tail back into StringLength and add the Top to the counter tuple.
// When finished, return the length of the counter tuple.
