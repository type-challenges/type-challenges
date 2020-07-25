<!--info-header-start--><h1>Deep Readonly <img src="https://img.shields.io/badge/-medium-f3c746" alt="medium"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><a href="https://type-challenges.netlify.app/case/9/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-blue?logo=typescript" alt="Take the Challenge"/></a> <br><br><!--info-header-end-->

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

Array is not required to be considered in this challenges.

For example

```ts
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

const todo: DeepReadonly<X> // should be same as `Expaceted`
```

<!--info-footer-start--><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/case/9/answers" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Answers-F59BAF?logo=awesome-lists&logoColor=white" alt="Check out Answers"/></a> <!--info-footer-end-->