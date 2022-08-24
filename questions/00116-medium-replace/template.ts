/*
Implement Replace<S, From, To> which replace the string From with To once in the given string S

For example

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
*/

type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Top}${From}${infer Tail}`
    ? `${Top}${To}${Tail}`
    : S
// If From matches an empty string, return it.
// Otherwise, grab the top, whatever & wherever the replace value is, and tail.
// Then, if that's true, replace the From section with To
