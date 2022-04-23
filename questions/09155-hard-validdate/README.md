Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.

**Leap year is not considered**

Good Luck!

```ts
ValidDate<'0102'> // true
ValidDate<'0131'> // true
ValidDate<'1231'> // true
ValidDate<'0229'> // false
ValidDate<'0100'> // false
ValidDate<'0132'> // false
ValidDate<'1301'> // false
```
