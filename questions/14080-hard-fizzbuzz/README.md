The FizzBuzz problem is a classic test given in coding interviews. The task is simple:

Print integers 1 to N, except:

- Print "Fizz" if an integer is divisible by 3;
- Print "Buzz" if an integer is divisible by 5;
- Print "FizzBuzz" if an integer is divisible by both 3 and 5.

For example, for N = 20, the output should be:
`1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz`

In the challenge below, we will want to generate this as an array of string literals.

For large values of N, you will need to ensure that any types generated do so efficiently (e.g. by
correctly using the tail-call optimisation for recursion).
