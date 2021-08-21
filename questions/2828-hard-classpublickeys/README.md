Implement the generic ```ClassPublicKeys<T>``` which returns all public keys of a class.

For example

```typescript
class A {
  public str: string;
  protected num: number;
  private bool: boolean;
  constructor() {
    this.str = 'naive';
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random()
  }

}

type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'
```
