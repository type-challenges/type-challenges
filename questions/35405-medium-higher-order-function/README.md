Fix MapArray with Higher-Order Functions

This challenge involves implementing a type-safe MapArray utility that applies a higher-order function (HOF) to transform each element in a tuple. The provided implementation of MapArray does not work as expected. Your task is to fix it.

Why the provided solution Fails
- The parameter `S` is scoped to the inner function returned by the HOF and cannot be dynamically binded from the context where MapArray applies the function

What You Need to Do
1. Fix Each HOF Type
- Ensure that each parameter `S` higher-order function’s return type can be binded from MapArray
2. Fix MapArray
- Update the MapArray type to correctly bind `S` to the inner function returned by the HOF to each element of the tuple.
