type MyPick<TObj, TKey extends keyof TObj> = {
  [K in TKey]: TObj[K]
}
