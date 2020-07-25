<!--info-header-start-->
# Get Return Type <img src="https://img.shields.io/badge/-medium-d8af2c" alt="medium"/>
> by Anthony Fu

<a href="https://type-challenges.netlify.app/case/2/play/en" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-blue?logo=typescript" alt="Take the Challenge"/></a> <!--info-header-end-->

Implement the built-in `ReturnType<T>` generic without using it.

For example

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```

<!--info-footer-start-->
<a href="https://type-challenges.netlify.app/case/2/play/en" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Answers-F59BAF?logo=awesome-lists&logoColor=white" alt="Check out Answers"/></a> <a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> 
<!--info-footer-end-->