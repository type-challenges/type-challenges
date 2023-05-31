// type If<C, T, F> = any

type If<C extends boolean, T, F> = C extends true ? T : F;

// 내 풀이
// type If<C, T, F> = C extends boolean ? T : F;
