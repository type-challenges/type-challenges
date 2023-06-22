<!--info-header-start--><h1>统计数组中的元素个数 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> </h1><blockquote><p>by 凤之兮原 <a href="https://github.com/kongmingLatern" target="_blank">@kongmingLatern</a></p></blockquote><p><a href="https://tsch.js.org/9989/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->

通过实现一个``CountElementNumberToObject``方法，统计数组中相同元素的个数
~~~ts
type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
/*
 return {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1
}
*/
type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
/*
 return {
  1: 2,
  2: 2,
  3: 2,
  4: 1,
  5: 1
}
*/
~~~


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/9989/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/9989/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->