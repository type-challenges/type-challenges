// type MyPick<T, K> = any

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
} 
