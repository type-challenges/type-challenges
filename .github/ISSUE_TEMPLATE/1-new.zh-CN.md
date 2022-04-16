---
name: 🇨🇳 新题目
about: 新题目提案，PR 会根据 Issue 自动生成。
title: "新题目"
labels: new-challenge, zh-CN
---

> 请按照以下的模版填充相应的内容，一个 PR 会自动生成并保持与本 Issue 的内容同步。

> 你不需要提供详细的答案或教学，但请保证题目可解。


## 基本信息

```yaml
# 题目难度
difficulty: easy # medium / hard / extreme

# 题目标题
title: 你的题目

# 题目标签
# tags: union, array # separate by comma
```

## 题目

<!--question-start-->

在这里描述你的题目并给出一些例子。支持使用 Markdown。

<!--question-end-->

## 题目模版

以下是给予挑战者开始做题的代码模版，在大部分情况下你只需要修改类型名称使其符合你的题目与判题测试，实现的部分保持 `any` 即可。

```ts
type YourType = any
```

## 判题测试

请为你的题目提供一些判题测试，你可以使用 `@type-challenges/utils` 中提供的一些工具进行判断。

```ts
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<true, true>>
]
```