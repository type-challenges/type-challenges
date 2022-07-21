There is some config need to pass to a constructor, but some config are conflicting with each other.
That means, they are mutually exclusive, **only one** should be here, and there **must be** one of them.

For example:

```typescript
type FullConfig =
    {
        other_members_1: number,
        other_members_2: boolean,
        rule_blacklist: string[]
        rule_whitelist: string[],
    } ;
```

This can be weird because you do one of them:
* allow some member, and reject others
* reject some member, and allow others

If these two is passed together, the config is not a valid one.

**Now the question come**: Make a type that let user can only pass one of the mutually exclusive member to the constructor.

The type for doing this is called `MutualExclude`, it accept the original *object*, and the *union* of *key* of mutually exclusive member.

For example, if `rule_blacklist` and `rule_whitelist` is mutually exclusive, the type can be something like:

```typescript
type ValidConfig = MutualExclude<FullConfig, "rule_blacklist"|"rule_whitelist"> ;
```
