import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type XYZ = { x: number, y: number, z: number } ;

type XOrYAndMustZ = MutualExclude<XYZ, "x"|"y"> ;

let test_1: XOrYAndMustZ = { x: 0, z: 0 } ;

let test_2: XOrYAndMustZ = { y: 0, z: 0 } ;

// @ts-expect-error
let test_3: XOrYAndMustZ = { x: 0, y: 0, z: 0 } ;

// @ts-expect-error
let test_4: XOrYAndMustZ = { z: 0 } ;
