<!--info-header-start--><h1>Trim Right <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Yugang Cao <a href="https://github.com/Talljack" target="_blank">@Talljack</a></p></blockquote><p><a href="https://tsch.js.org/4803/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->


实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。

例如

```ts
type Trimmed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/4803/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/4803/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-106%E3%83%BB%E5%8E%BB%E9%99%A4%E5%B7%A6%E4%BE%A7%E7%A9%BA%E7%99%BD-d9901a" alt="106・去除左侧空白"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-108%E3%83%BB%E5%8E%BB%E9%99%A4%E4%B8%A4%E7%AB%AF%E7%A9%BA%E7%99%BD%E5%AD%97%E7%AC%A6-d9901a" alt="108・去除两端空白字符"/></a> <!--info-footer-end-->
