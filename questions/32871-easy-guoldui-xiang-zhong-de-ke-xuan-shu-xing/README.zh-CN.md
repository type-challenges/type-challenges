给定一个对象类型PartialObject，请编写一个类型FilteredObject<T, K>，它将从类型T中过滤掉所有可选属性（即?标记的属性），并返回一个新的类型U，其中只包含T中非可选的属性K。

例如，如果T是{ a: number; b?: string; c: boolean; }，那么FilteredObject<T, 'a' | 'c'>应该等价于{ a: number; c: boolean; }。
