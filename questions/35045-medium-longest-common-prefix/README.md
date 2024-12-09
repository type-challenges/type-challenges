<!--info-header-start--><h1>Longest Common Prefix <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> </h1><blockquote><p>by Tom Cleary <a href="https://github.com/thomcleary" target="_blank">@thomcleary</a></p></blockquote><p><a href="https://tsch.js.org/35045/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/35045/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/35045/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->