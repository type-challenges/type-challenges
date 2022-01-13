<!--info-header-start--><h1>MapTypes <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23map-999" alt="#map"/> <img src="https://img.shields.io/badge/-%23object-999" alt="#object"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by Krzysztof "Wokay" Łokaj <a href="https://github.com/wokayme" target="_blank">@wokayme</a></p></blockquote><p><a href="https://tsch.js.org/5821/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type R which has the following structure

```ts
type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
}
```

## Examples:

```ts
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
```

Be aware that user can provide a union of types:
```ts
type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToDate = { mapFrom: string; mapTo: Date;}
MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
```

If the type doesn't exist in our map, leave it as it was:
```ts
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/5821/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/5821/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->