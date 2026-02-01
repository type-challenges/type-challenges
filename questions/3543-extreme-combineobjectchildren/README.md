Output an object which contains all keys present in every children object and as optional all the others.

For example, given this input:

```typescript
type Test = {
    one: {
        a: string;
        b: string;
        c: string;
    };
    two: {
        a: string;
        b: string;
        d: string;
    };
    three: {
        a: string;
        b: string;
        e: string;
    };
}
```

output 

```typescript
type CombineObjectChildren<Test> = {
    a: string;
    b: string;
    c?: string;
    d?: string;
    e?: string;
}
```
