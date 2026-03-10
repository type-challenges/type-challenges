You are given 13 coins. All of them weigh the same except for one, which is either heavier or lighter.

You also have a balance scale that allows you to compare the weights of coins on its two sides.

Your task is to determine which coin is the one with a different weight and whether it is heavier or lighter using no more than 3 weighings.

You will use the `Weigh1`, `Weigh2`, and `Weigh3` constants to represent each weighing step. Each constant contains the setup for the respective weighing step based on the outcome of the previous weighing.

Additionally, the `WeighingOutcome` type will represent the result of each weighing, indicating which side is heavier or if both sides are equal.

The test cases will call `Weigh1`, `Weigh2`, and `Weigh3` to simulate the weighing steps and verify the solution. 

The `printFakeCoin` function demonstrates how to use these constants in real JS runtime, performing real-time type validation on function parameters based on complex logic.

For more insight into balance puzzles, you can refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Balance_puzzle).
