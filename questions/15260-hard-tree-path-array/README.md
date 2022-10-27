Create a type `Path` that represents validates a possible path of a tree under the form of an array.

Related challenges:
- [Object key path](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md)

```ts
declare const example: {
    foo: {
        bar: {
            a: string;
        };
        baz: {
            b: number
            c: number
        }
    };
}

/* Possible solutions: 
[]
['foo']
['foo', 'bar']
['foo', 'bar', 'a']
['foo', 'baz']
['foo', 'baz', 'b']
['foo', 'baz', 'c']
*/
```
