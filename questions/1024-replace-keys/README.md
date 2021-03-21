<!--info-header-start--><h1>replaceKeys <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by lullabyjune <a href="https://github.com/lullabyjune" target="_blank">@lullabyjune</a></p></blockquote><p><a href="https://tsch.js.org/956/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replace,
A type takes three arguments. 


For example:

```

type NodeA = {
  type: 'A'
  name: string
}

type NodeB = {
  type: 'B'
  id: number
}

type NodeC = {
  type: 'C'
  name: string
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNameNodes = ReplaceKeys<Nodes, 'name', {name: number}> // {type: 'A', name: number} | NodeB | {type: 'C', name: number} // would replace name from string to number
type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}> // {type: 'A', name: never} | NodeB | {type: 'C', name: never} // would replace name to never
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/956/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/956/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->