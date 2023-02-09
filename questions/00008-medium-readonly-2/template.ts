
export type MyReadonly2<T, K extends keyof T = keyof T> =
    {
        readonly [Key in keyof T as Key extends K ? Key : never]: T[Key]
    }
    &
    {
        [Key in keyof T as Key extends K ? never : Key]: T[Key]
    }

interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonly2<Todo> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK