type Includes<T extends readonly any[], U> = T extends [infer F, ...infer rest] ? (F extends U ? true : Includes<rest, U>) : false
type IncludesV2<T extends readonly any[], U> = U extends T[number] ? true : false
type IncludesV3<T extends readonly any[], U> = T[number] extends U ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
