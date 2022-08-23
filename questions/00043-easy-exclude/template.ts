// Exclude from T those types that are assignable to U

// this is the literal definition of the Exclude type from TypeScript docs
type MyExclude<T, U> = T extends U ? never : T
