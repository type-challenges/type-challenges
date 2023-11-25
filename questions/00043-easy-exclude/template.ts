type MyExclude<TType, TExclude> = TType extends TExclude ? never : TType
