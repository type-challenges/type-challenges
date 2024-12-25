<!--info-header-start--><h1>Valid Sudoku <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/> <img src="https://img.shields.io/badge/-%23game-999" alt="#game"/></h1><blockquote><p>by Apollo Wayne <a href="https://github.com/Shinerising" target="_blank">@Shinerising</a></p></blockquote><p><a href="https://tsch.js.org/35314/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Sudoku is a famous paper and pencil game. The goal of Sudoku is to fill a 9x9 grid with numbers so that each row, column and 3x3 section contain all of the digits between 1 and 9. You'll be given a finished 9x9 grid, and you need to determine if it's a valid Sudoku solution. Return true if it is, and false if it is not.

```ts
type Matrix = [
  [9, 5, 7, 8, 4, 6, 1, 3, 2],
  [2, 3, 4, 5, 9, 1, 6, 7, 8],
  [1, 8, 6, 7, 3, 2, 5, 4, 9],
  [8, 9, 1, 6, 2, 3, 4, 5, 7],
  [3, 4, 5, 9, 7, 8, 2, 6, 1],
  [6, 7, 2, 1, 5, 4, 8, 9, 3],
  [4, 6, 8, 3, 1, 9, 7, 2, 5],
  [5, 2, 3, 4, 8, 7, 9, 1, 6],
  [7, 1, 9, 2, 6, 5, 3, 8, 4]
]
type result = ValidSudoku <Matrix>; // expected to be true
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/35314/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/35314/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->