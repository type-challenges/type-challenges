---
name: New Challenge
about: Propose a new challenge, a PR will be auto generated.
title: ""
labels: new-challenge
---

You need to provide a detailed description of your new challenge, 
either in English or Chinese are acceptable.

A detailed solution/guide is not required, but be sure the challenge is solvable.

Please follow the template and fill the info.
A PR will be auto-generated and always reflect on your changes.

## Info

```yaml
difficulty: easy # medium / hard / extreme
title: Your Question Name
#tags: union, array # separate by comma
```

## Question

<!--question-start-->

Describe your question and give some examples. 

<!--question-end-->

## Template

```ts
type YourType = any
```

## Test Cases

```ts
import { Equal, Expect } from '@type-challenges/utils'

// your test cases
type cases = [
  Expect<Equal<true, true>>
]
```
