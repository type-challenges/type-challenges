export type Pop<T extends unknown[]> = T extends [...infer head, any] ? head : [];
//export type Pop<T extends unknown[]> = T extends [...infer head, infer tail] ? head : [];