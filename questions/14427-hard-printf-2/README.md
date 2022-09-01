`printf` is a `c` function which prints a format string with some arguments to `stdout`. 

For this challenge, your task is to implement the `Printf` type which takes a format string as the first generic argument, and an array of arguments as the second generic argument.

### `Printf` must follow a couple of rules.

1. `%d | %s | %b` wildcards must be replaced with the appropriate type arguments.
1.1 `%d` replaced with `number`
1.2 `%s` replaced with `string`
1.3 `%b` replaced with `boolean`
3. `%%`  must be escaped to a single `%`.
4. Number of wildcards and arguments must be the same; else `never`.

Example:
```ts
type str = Printf<'%s %s', ['Hello', 'World']> // str: 'Hello World'
```
