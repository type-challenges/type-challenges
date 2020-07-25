<!--info-header-start-->
# Get Readonly Keys <img src="https://img.shields.io/badge/-hard-red" alt="hard"/>
> by Anthony Fu

<a href="https://type-challenges.netlify.app/case/5/play/en" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-blue?logo=typescript" alt="Take the Challenge"/></a> <!--info-header-end-->

Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

For example

```ts
interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```

<!--info-footer-start-->
<a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://type-challenges.netlify.app/case/5/answers" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Answers-F59BAF?logo=awesome-lists&logoColor=white" alt="Check out Answers"/></a> 
<!--info-footer-end-->