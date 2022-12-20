import type { Equal, Expect } from '@type-challenges/utils'

type obj = {
  [x: string]: (
    | {
      component: 'AInput'
      value: string
    }
    | {
      component: 'ASelect'
      value: string
    }
    | {
      component: 'ARangePicker'
      value: [number, number]
    }
  ) & {
    label?: string
  }
}

type res = {
  AInput: string;
  ASelect: string;
  ARangePicker: [number, number];
}

type cases = [
  Expect<Equal<KeyTypeFromProps<obj, 'component', 'value'>, res>>,

  // @ts-expect-error
  KeyTypeFromProps<{ x: 1 }, '', ''>,
  // @ts-expect-error
  KeyTypeFromProps<obj, 'fake', 'fake'>,
  // @ts-expect-error
  KeyTypeFromProps<[], '', ''>
]
