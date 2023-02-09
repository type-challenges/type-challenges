export type DeepReadonly<T> = {
    readonly [K in keyof T] : T[K] extends Function | string | number | symbol ? T[K] : DeepReadonly<T[K]>
}

type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  
  type Todo = DeepReadonly<X> 
