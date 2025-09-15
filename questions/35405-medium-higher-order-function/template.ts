// Higher-Order Function: ToLowerCase
type ToLowerCase = () => <S extends string>(s: S) => Lowercase<S>;

// Higher-Order Function: Repeat
type Repeat = <N extends number>(count: N) => <S extends string>(s: S) => Repeated<N, S>;

type Repeated<N extends number | string, S extends string, O extends string = ''> = `${N}` extends `${infer L}${infer R}`
  ? Repeated<R, S, `${O}${O}${O}${O}${O}${O}${O}${O}${O}${O}${(['', S, `${S}${S}`, `${S}${S}${S}`, `${S}${S}${S}${S}`, `${S}${S}${S}${S}${S}`, `${S}${S}${S}${S}${S}${S}`, `${S}${S}${S}${S}${S}${S}${S}`, `${S}${S}${S}${S}${S}${S}${S}${S}`, `${S}${S}${S}${S}${S}${S}${S}${S}${S}`] & Record<string, ''>)[L]}`>
  : O;

// Higher-Order Function: Concat
type Concat = <A extends string[]>(...strings: A) => <S extends string>(s: S) => Concatenated<A, S>;

type Concatenated<A, S extends string>
  = A extends [`${infer L}`, ...infer R] ? Concatenated<R, `${S}${L}`> : S;

// Function: MapArray to accept a tuple and a Higher-Order Function as parameters
type MapArray = <T extends unknown[], M extends (...args: any) => any>(t: T, m: M) => Mapped<T, M>;

type Mapped<T extends unknown[], M extends (...args: any) => any> = {[I in keyof T]: ReturnType<M>};
