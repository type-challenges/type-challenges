export type Chainable<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<O & {[P in K] : V }>;
  get(): O
}