// your code here

// type MyReturnType<T extends (...args: any) => any> = T

/* _____________ Test Cases _____________ */
import { expectType, _ } from '@type-challenges/utils'

expectType<string>(_ as MyReturnType<() => string>)
expectType<123>(_ as MyReturnType<() => 123>)
expectType<{a: [12, 'foo']; bar: 'hello'}>(_ as MyReturnType<() => {a: [12, 'foo']; bar: 'hello'}>)
expectType<Promise<boolean>>(_ as MyReturnType<() => Promise<boolean>>)
