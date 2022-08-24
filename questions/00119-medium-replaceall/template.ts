/*
Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

For example
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
*/

type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Top}${From}${infer Tail}`
    ? `${Top}${To}${ReplaceAll<Tail, From, To>}`
    : S

// If From matches an empty string, return it.
// Otherwise, grab the top, the From value to replace (wherever it is in the string), and the tail.
// Then, if true, return the Top and the To value. This replaces From to To.
// Now, for any remaining Tail, run it through ReplaceAll again.
// When finished, return the "cleaned" string.
