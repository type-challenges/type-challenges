export type MyOmit<T, K extends keyof T> = {
    [R in keyof T as R extends K ? never : R]: T[R]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>
