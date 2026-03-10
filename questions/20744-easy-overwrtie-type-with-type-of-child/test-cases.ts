import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
   "id": number,
   "extension": {
        "id": number,
        "data": {
            "id": number,
            "prop1": any,
            "prop2": any
        }
   }
}

type ReducedModel = {
   "id": number,
   "extension": {
        "id": number,
        "prop1": any,
        "prop2": any
   }
}

interface DeepModel {
  'id': number,
  'foo': {
    'id': number,
    'data': {
      'id': number,
      'prop1': any,
      'prop2': any,
      'bar': {
        'id': number,
        'data': {
          'id': number,
          'prop1': any,
          'prop2': any,
        }
      }
    }
  }
}

interface ReducedDeepModel {
  'id': number,
  'foo': {
    'id': number,
    'prop1': any,
    'prop2': any,
    'bar': {
      'id': number,
      'prop1': any,
      'prop2': any,
    }
  }
}

type cases = [
  Expect<Equal<ObjectFromEntries<ReducedModel>, Model>>,
  Expect<Equal<ObjectFromEntries<DeepModel>, ReducedDeepModel>>,
]
