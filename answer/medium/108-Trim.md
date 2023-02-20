# 108-Trim

## 1. 풀이
```ts
type Space = ' ' | '\t' | '\n';

type Trim<S extends string> = 
  S extends `${Space}${infer T}` ? 
    Trim<T> : S extends `${infer R}${Space}` ? 
      Trim<R> : S;
```

## 2. 해설
1. 공백을 나타내는 타입 생성함
2. 앞에 있는 문자가 공백을 나타내는 문자이면 뒤에 있는 문자열을 `Trim<T>`로 반환
3. 2번에 결과에 걸리지 않는 문자열에서 뒤에 문자가 공백을 나타내면 앞에 문자열을 `Trim<R>`로 반환