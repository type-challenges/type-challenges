type LengthOfString<S extends string, A extends string[] = []> =
    S extends `${infer C}${infer T}`
    ? LengthOfString<T, [C, ...A]>
    : A["length"]