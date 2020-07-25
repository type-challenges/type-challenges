{WIP} Implement a simpiled version of a Vue-like typing support.

By providing a function name `SimpleVue` (similar to `Vue.extend` or `defineComponent`), it should properly infer the `this` type inside computed and methods.

In this challenge, we assume that SimpleVue take an Object with `data`, `computed` and `methods` fields as it's only argument,

`data` is a simple function that returns a object that expose the the context `this`,

`computed` is an Object of functions that take the context as `this`, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.

`methods` is an Object of functions that take the context as `this` as well. Methods can access the fields exposed by `data`, `computed` as well as other `methods`. The different between `computed` is that `methods` exposed as functions as-is.

The type of `SimpleVue`'s return value can be arbitrary.

```ts
const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
```