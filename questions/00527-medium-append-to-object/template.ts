/*
Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

For example

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
*/

type AppendToObject<T extends {}, NewKey extends string, Value> = {
  [Key in keyof T | NewKey]: Key extends keyof T
    ? T[Key]
    : Value
}

// Assign this to an object and accommodate a key that's either from T, or a new key from NewKey
// The key in this object will either already be there, or it will be assigned a new key
// If the key is already in the object, keep the value of that key
// Otherwise, add the new Value
