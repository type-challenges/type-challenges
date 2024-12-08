type Merge<T> = 
  T extends Record<string, unknown>
  ? { [P in keyof T]: Merge<T[P]> }
  : T


type Parse<T extends string> = unknown
