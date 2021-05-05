Camelize<{
  some_prop: string, 
  prop: { another_prop: string },
  array: [{ snake_case: string }]
}> 

// expected to be
// {
//   someProp: string, 
//   prop: { anotherProp: string },
//   array: [{ snakeCase: string }]
// }
