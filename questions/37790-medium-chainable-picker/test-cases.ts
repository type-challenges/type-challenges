import type { Equal, Expect } from '@type-challenges/utils'

type Person = {
  name: string
  id: string
  age: number
  email: string
}

type User = {
  username: string
  password: string
  role: 'admin' | 'user'
  createdAt: Date
  lastLogin: Date
}

const person = {} as Person
const user = {} as User

type cases = [
  // Basic single property pick
  Expect<Equal<Pick<Person, 'name'>, ReturnType<ReturnType<typeof pick<Person>>['name']>>>,

  // Multiple properties chained
  Expect<Equal<Pick<Person, 'name' | 'age'>, ReturnType<ReturnType<typeof pick<Person>>['name']['age']>>>,
  Expect<Equal<Pick<Person, 'id' | 'email'>, ReturnType<ReturnType<typeof pick<Person>>['id']['email']>>>,

  // Three properties chained
  Expect<Equal<Pick<Person, 'name' | 'age' | 'email'>, ReturnType<ReturnType<typeof pick<Person>>['name']['age']['email']>>>,

  // All properties picked
  Expect<Equal<Pick<Person, 'name' | 'id' | 'age' | 'email'>, ReturnType<ReturnType<typeof pick<Person>>['name']['age']['id']['email']>>>,
  Expect<Equal<Pick<Person, 'name' | 'id' | 'age' | 'email'>, ReturnType<ReturnType<typeof pick<Person>>['name']['age']['email']['id']>>>,
]

// @ts-expect-error - Cannot pick the same property twice
const invalidDouble = pick(person).name.name()

// @ts-expect-error - Cannot pick non-existent property
const invalidProp = pick(person).nonexistent()

// @ts-expect-error do not accept other types
pick([])

// @ts-expect-error do not accept other types
pick(1)

// @ts-expect-error do not accept other types
pick('1')

// @ts-expect-error do not accept other types
pick(() => {})

// Valid usage examples
const result1 = pick(person).name.age()
const result2 = pick(person).email.id.name()
const result3 = pick(user).username.role()
const result4 = pick(user).createdAt.lastLogin.username()
