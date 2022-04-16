---
name: 🇯🇵 新しい課題
about: 新しい課題の提案をするとPRが自動生成されます。
title: ""
labels: new-challenge, ja
---

> テンプレートに従って内容を記入してください。PRは自動生成され、常にあなたの変更が反映されます。
>
> 詳細な解答/ガイドは必要ありませんが、課題が解決可能であることを確認してください。

## 基本情報

```yaml
# 難易度
difficulty: easy # medium / hard / extreme

# タイトル
title: 課題のタイトル

# タグ
# tags: union, array # separate by comma
```

## 質問

<!--question-start-->

あなたの課題の質問文を、いくつかのサンプルコードと一緒に記入してください。ここではMarkdownがサポートされています。

<!--question-end-->

## テンプレート

課題の挑戦者がコーディングを始める際のテンプレートです。基本的には質問とテストに合わせて型の名前を変更して、実装は `any` とするだけです。

```ts
type YourType = any
```

## テストケース

あなたの課題のテストケースです。`@type-challenges/utils`が提供するいくつかのアサーションを使うことが出来ます。

```ts
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<true, true>>
]
```
