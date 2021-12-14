type Res = ArrayRemove<[1, 2], 1>; // excepted to be [2]
type Res1 = ArrayRemove<[1, 2, 4, 1, 5], [1, 2]>; // excepted to be [4, 5]
type Res2 = ArrayRemove<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // excepted to be []
