import { Equal, Expect } from '@type-challenges/utils'

const test = {
    name: "Type",
    description: "Challenge",
    liked: [ 
      {
         name: "TypeScript",
         description: "Typed JavaScript at Any Scale."
      },  
      {
        name: "JavaScript",
        description: "Just JavaScript",
      }
    ]
} as const

type cases = [
  Expect<Equal<Get<typeof test, "name">,  "Type">>,
  Expect<Equal<Get<typeof test, "liked.0.name">,  "TypeScript">>,
  // @ts-expect-error
  Expect<Equal<Get<typeof test, "liked.name">,  "TypeScript">>,
]
