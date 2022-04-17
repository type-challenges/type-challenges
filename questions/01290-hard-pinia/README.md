<!--info-header-start--><h1>Pinia <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/1290/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

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


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/1290/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/1290/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->