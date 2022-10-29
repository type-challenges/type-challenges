type a = Filter<[0, 1, 2], 2> // expected to be [2]
type b = Filter<[0, 1, 2], 0 | 1> // expected to be [0, 1]

type Falsy = false | 0 | '' | null | undefined
type c = Filter<[0, 1, 2], Falsy> // expected to be [0]
