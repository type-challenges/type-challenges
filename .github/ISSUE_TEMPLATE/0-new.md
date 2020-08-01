---
name: New Challenge
about: Propose a new challenge, a PR will be auto generated.
title: ""
labels: new-challenge
---

> You need to provide a detailed description of your new challenge, either in English or Chinese are acceptable.

> Detailed solution/guide is not required, but be sure the challenge is solvable.

> Please follow the template and fill the info. A PR will be auto-generated and always reflect on your changes.

## Info

Basic info of your challenge questions,

```yaml
difficulty: easy # medium / hard / extreme
title: Your Question Name
#tags: union, array # separate by comma
```

## Question

<!--question-start-->

Describe your question and give some examples. Markdown is supported here. 

<!--question-end-->

## Template

This is the template for challenger to start the coding, basically you just need to change the name of your generic/function and leave to implementation `any`.

```ts
type YourType = any
```

## Test Cases

Provide some test cases for your challenge, you can use some utils from `@type-challenges/utils` for assetion.  

```ts
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<true, true>>
]
```
