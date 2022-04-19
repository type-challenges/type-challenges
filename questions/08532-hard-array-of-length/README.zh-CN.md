```ts
export let aaa: [number, number, number, number] = [1, 2, 3, 45];
export let bbb: ArrayOfLength<number, 4> = [1, 2, 3, 45];

aaa = bbb;
bbb = aaa;
```
