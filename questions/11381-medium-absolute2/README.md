实现一个接收string类型参数的Absolute2类型,返回一个数字符串。
```
type Test = '-1|0%0_';
type Result = Absolute<Test>; // expected to be "100"
```
