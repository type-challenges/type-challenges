type If<TCondition extends boolean, TTrue, TFalse> = TCondition extends true ? TTrue : TFalse
