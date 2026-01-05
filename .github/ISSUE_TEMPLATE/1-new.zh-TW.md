---
name: 🇹🇼 新題目
about: 新題目提案，PR 會根據 Issue 自動生成。
title: "新題目"
labels: new-challenge, zh-CN
---

> 请按照以下的模板填充相應的內容，一個 PR 會自動生成並保持與本 Issue 的內容同步。

> 您不需要提供詳細的答案或教學，但請保證題目可解。


## 基本信息

```yaml
# 題目難度
difficulty: easy # medium / hard / extreme

# 题目標提
title: 您的題目

# 題目標籤
# tags: union, array # separate by comma
```

## 題目

<!--question-start-->

在這裡描述您的題目並給出一些例子。支持使用 Markdown。

<!--question-end-->

## 題目模板

以下是給予挑戰者開始做題的代碼模版，在大部分情況下你只需要修改類型名稱使其符合您的題目與判提測試，實現的部分保持 `any` 即可。

```ts
type YourType = any
```

## 判题测试

請為您的題目提供一些判提測試，您可以使用 `@type-challenges/utils` 中提供的一些工具進行判斷。

```ts
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<true, true>>
]
```