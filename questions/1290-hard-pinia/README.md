Create a type-level function whose types is similar to [Pinia](https://github.com/posva/pinia) library. You don't need to implement function actually, just adding types.

### Overview

This function receive only one parameter whose type is an object. The object contains 4 properties:

- `id` - just a string (required)
- `state` - a function which will return an object as store's state (required)
- `getters` - an object with methods which is similar to Vue's computed values or Vuex's getters, and details are below (optional)
- `actions` - an object with methods which can do side effects and mutate state, and details are below (optional)

### Getters

When you define a store like this:

```typescript
const store = defineStore({
  // ...other required fields
  getters: {
    getSomething() {
      return 'xxx'
    }
  }
})
```

And you should use it like this:

```typescript
store.getSomething
```

instead of:

```typescript
store.getSomething()  // error
```

Additionally, getters can access state and/or other getters via `this`, but state is read-only.

### Actions

When you define a store like this:

```typescript
const store = defineStore({
  // ...other required fields
  actions: {
    doSideEffect() {
      this.xxx = 'xxx'
      return 'ok'
    }
  }
})
```

Using it is just to call it:

```typescript
const returnValue = store.doSideEffect()
```

Actions can return any value or return nothing, and it can receive any number of parameters with different types.
Parameters types and return type can't be lost, which means type-checking must be available at call side.

State can be accessed and mutated via `this`. Getters can be accessed via `this` but they're read-only.
