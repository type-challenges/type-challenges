import { Equal, Expect } from '@type-challenges/utils'
import { Equal } from '../../utils'

type NodeA = {
  type: 'A'
  name: string
}

type NodeB = {
  type: 'B'
  id: number
}

type NodeC = {
  type: 'C'
  name: string
}

type ReplacedNameNodeA = {
  type: 'A'
  name: number
}

type ReplacedNameNodeC = {
  type: 'C'
  name: number
}

type NoNameNodeA = {
  type: 'A'
  name: never
}

type NoNameNodeC = {
  type: 'C'
  name: never
}

type Nodes = NodeA | NodeB | NodeC
type NodesReplacedName = ReplacedNameNodeA | NodeB | ReplacedNameNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name', {name: number}>, NodesReplacedName>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', {aa: number}>, NodesNoName>>,
]