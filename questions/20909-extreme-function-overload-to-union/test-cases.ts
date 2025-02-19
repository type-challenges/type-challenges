import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type Tab = {
    id: number;
    url?: string;
}
declare function queryTab(callback: (user: Tab) => void): void;
declare function queryTab(id: number): Tab;
declare function queryTab(name: string): Promise<Tab>;


type Details = {
    code?: string
}
type InsertCSSFunc = {
    (details: Details): Promise<void>;
    (details: Details, callback?: () => void): void;
    (tabId: number, details: Details): Promise<void>;
    (tabId: number, details: Details, callback?: () => void): void;
}

type cases = [
    Expect<Equal<OverloadToUnion<typeof queryTab>, ((callback: (user: Tab) => void) => void) | ((id: number) => Tab) | ((name: string) => Promise<Tab>)>>,
    Expect<Equal<OverloadToUnion<InsertCSSFunc>,
        ((details: Details) => Promise<void>) |
        ((details: Details, callback?: (() => void) | undefined) => void) |
        ((tabId: number, details: Details) => Promise<void>) |
        ((tabId: number, details: Details, callback?: (() => void) | undefined) => void)>
    >,
]
