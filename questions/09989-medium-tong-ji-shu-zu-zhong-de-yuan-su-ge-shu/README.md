<!--info-header-start--><h1>Count Element Number To Object <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> </h1><blockquote><p>by 凤之兮原 <a href="https://github.com/kongmingLatern" target="_blank">@kongmingLatern</a></p></blockquote><p><a href="https://tsch.js.org/9989/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:

~~~ts
type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
// return {
//   1: 1,
//   2: 1,
//   3: 1,
//   4: 1,
//   5: 1
// }

type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
// return {
//   1: 2,
//   2: 2,
//   3: 2,
//   4: 1,
//   5: 1
// }
~~~


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/9989/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/9989/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->