### Longest Common Prefix

Write a type, `LongestCommonPrefix` that returns the longest common prefix string amongst a tuple of strings.

If there is no common prefix, return an empty string `""`.

```ts
type Common = LongestCommonPrefix<["flower", "flow", "flight"]>
//   ?^ "fl"

type Uncommon = LongestCommonPrefix<["dog", "racecar", "race"]>
//   ?^ ""
```
Inspired by [LeetCode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)
