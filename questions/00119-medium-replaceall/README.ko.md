<!--info-header-start--><h1>ReplaceAll <img src="https://img.shields.io/badge/-%EB%B3%B4%ED%86%B5-d9901a" alt="보통"/>  <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://www.typescriptlang.org/play?#code/PQKgUABBCM0JwQLQQEoFMAOAbAhgYzQEEstIlELKyAjATwkIDsAXACwHtH6AxAVwgAUAARwsAZrwCUEAMSAXnsCti7OZoAtthwrEWAJYqATjlJQyMsxEATk4A5usmUA-E4BbRwCOTEK4ATxwC+jEAAYBlb4ALo4A4gxCAAb2AIb2unj7c+uyq3oAi4xCAfDOAIqMQgBVdgAotPgAq7N6AOh0QgAq1gC0zgBqrgClNEIA4E4AkjYC1nT7oGgTEWAA8vgA0ELHx-QUAfEkQgDa1gCBrlYAcg4ApYwB0YGSAEGOAO0MAXLZQ3nvMAM5kzLQYaBD6mLgEACYQALyoV-hEJF0A5MwQ9BgQ5wfvfrvCCAkHvEYQYDAP4ADzOeBUd2Y7Ag1HOn1OaABZD23h2EAhAHE9AAJXjUYIQOSABjrNhBWMxmBgDpsoYc8KxFgArA6Ldj6ADmwFgcDAIGAKzAoAgAH05fKFfKIIAb0epAQggBV5wA7LRBAKHjgFIO2WK40yiDilYnM5Pdqvbq+WEqRg3A4QA7MfQ6RgC-qDVQOtBOl1uj1e4YotAwx3O13uz0CiGPUS0SXSk3GiCAGUXACVDgA6liCAAHnAC7jWaNaaV5p06n5X0t5wA3hAAKIAR14Rn6jbhaAREAAvhAxHE-e8hLXEByjFgAwKscBeMwdFhsWBaxA8DgDliHhAANpkTvw5hdFtt7pta62j5idjsag4fSg953h9A6-scGvm9v8EjXr7rsIserZGF054vJ0V43s+j53gKj7fr+IJvtBIy-v+h5AaeoHPB0bzvMh97QUCRFITeH6kewb4IWhUAHt2R4niBYG4d0nzfBAvz-I+IJAuRGJnACqF-rRAEMcBZ44Ze+FQYR96PvBZGIdJt6yQ+QnofRmFMZJEFPve37EXJn7vkpVGKTRTaiVpEk2rpBH6PZj63jBfHXs+blyepIkYYxNkXnZt43g5gVGSC1DvsRrmBcFKEWXRgG+dhtl4fJvFKT+f4ALqSlKIClmWpqACdNgAy4xAgAXTYAIzX5WWZoSqAZAQoAqBOAK9NECAK81gAE45UtL0oyzKssA7KcjyfKCsK8DAKIBwAO5oPowAANbsA1EAtVSPUMkyLJsgcHLcry-JCrAABscDAAc7BYPOOicEcUAQoVgAena4dSACctdKbf1O17SNh2Lct4pAA" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

주어진 문자열 `S`에서 부분 문자열 `From`을 찾아 모두 `To`로 교체하는 제네릭 `ReplaceAll<S, From, To>`을 구현하세요.

예시:

```ts
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
```


<!--info-footer-start--><br>
<a href="../../README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0-grey" alt="돌아가기"/></a>
 <a href="https://tsch.js.org/119/answer/ko" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-teal" alt="정답 공유하기"/></a>
 <a href="https://tsch.js.org/119/solutions" target="_blank"><img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%EB%B3%B4%EA%B8%B0-de5a77?logo=awesome-lists&logoColor=white" alt="정답 보기"/></a> 
