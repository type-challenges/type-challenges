Implement the generic `ClassPublicKeys<T>` which returns all public keys of a class.

For example:

```ts
class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'
```
