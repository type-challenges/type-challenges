You're required to implement a type-level parser to parse URL query string into a object literal type.

Some detailed requirements:

- Value of a key in query string can be ignored but still be parsed to `true`. For example, `'key'` is without value, so the parser result is `{ key: true }`.
- Duplicated keys must be merged into one. If there are different values with the same key, values must be merged into a tuple type.
- When a key has only one value, that value can't be wrapped into a tuple type.
- If values with the same key appear more than once, it must be treated as once. For example, `key=value&key=value` must be treated as `key=value` only.
