import { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y']
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type cases = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>,
]
