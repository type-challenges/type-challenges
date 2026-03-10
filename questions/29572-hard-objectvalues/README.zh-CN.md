Implement a type, `ObjectValues`, just like `Object.values` 

it looks like this
```ts
interface TestCase1 {
    a: number;
    b: string;
    c: 'this is c';
    d: () => void;
}

ObjectValues<TestCase1>  ;//[number, string,'this is c', () => void]
ObjectValues<TestCase1,'a'|'b'|'d'>  ;// [number, string, () => void]

//TODO
// In fact，I hope it can be like this. However, I did not realize this idea, if you are interested, you can give it a try
ObjectValues<TestCase1,"d"|"a">  ;//  by type order  [() => void, number]
```
