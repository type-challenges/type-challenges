/*
Implement the built-in Omit<T, K> generic without using it.

Constructs a type by picking all properties from T and then removing K

For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
*/

type MyOmit<T, K extends keyof T> = { [key in Exclude<keyof T, K>]: T[key] }
// take in T
// add T's keys to K
// for each key in T, filter out any that match K
// return a generic object with the non-filtered keys
