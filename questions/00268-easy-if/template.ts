type If<C extends true | false, T, F> = C extends true ? T : F
