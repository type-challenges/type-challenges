enum YourEnum {}
type EnumToUnion<T> = any; // write your anwser here.
type UnionType = EnumToUnion<YourEnum>; // should be a string union.
