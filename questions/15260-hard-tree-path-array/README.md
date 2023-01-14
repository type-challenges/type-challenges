<!--info-header-start--><h1>Tree path array <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> </h1><blockquote><p>by Neil Richter <a href="https://github.com/noook" target="_blank">@noook</a></p></blockquote><p><a href="https://tsch.js.org/15260/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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

// Possible solutions: 
// []
// ['foo']
// ['foo', 'bar']
// ['foo', 'bar', 'a']
// ['foo', 'baz']
// ['foo', 'baz', 'b']
// ['foo', 'baz', 'c']
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/15260/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/15260/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->