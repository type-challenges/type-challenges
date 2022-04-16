---
name: New Challenge
about: Propose a new challenge, a PR will be auto generated.
title: ""
labels: new-challenge
---

> Please follow the template and fill the info. A PR will be auto-generated and always reflect on your changes.
>
> Detailed solution/guide is not required, but please be sure the challenge is solvable.

## Info

Basic info of your challenge questions,

```yaml
difficulty: easy # medium / hard / extreme
title: Your Question Name
# tags: union, array # separate by comma
```

## Question

<!--question-start-->

Describe your question and give some examples. Markdown is supported here. 

<!--question-end-->

## Template

This is the template for challengers to start the coding. Basically, you just need to change the name of your generic/function and leave to implementation `any`.

```ts
type YourType = any
```

## Test Cases

Provide some test cases for your challenge, you can use some utils from `@type-challenges/utils` for asserting.  

```ts
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<true, true>>
]
```
