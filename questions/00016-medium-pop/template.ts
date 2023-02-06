// 想的太复杂了。。。
type Pop<T extends any[]> = T extends [...infer F, infer _R] ? F : []