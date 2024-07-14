type Coins = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

// Defines weighing setup to systematically compare two groups of coins
type WeighingSetup1 = {Left: readonly Coins[], Right: readonly Coins[]}
type WeighingSetup2 = {HeavierOnLeft: WeighingSetup1, HeavierOnRight: WeighingSetup1, EqualWeight: WeighingSetup1}
type WeighingSetup3 = {HeavierOnLeft: WeighingSetup2, HeavierOnRight: WeighingSetup2, EqualWeight: WeighingSetup2}

/**
 * Below is the templates to get start
 */

const Weigh1 = {
  Left: [1, 2, 3, 4, 5, 6], Right: [7, 8, 9, 10, 11, 12]
} as const satisfies WeighingSetup1
/**
 * Weigh1: Initial weighing setup
 * 
 *         Left Side                         Right Side
 *        1  2  3  4  5  6               7  8  9  10  11  12
 * [===========================]    [===========================]
 *              [O]                              [O]
 *                               [O]
 * 
 * This const is used to explain how the first weighing setup works.
 * Coins 1 to 6 are placed on the left side of the scale,
 * and coins 7 to 12 are placed on the right side of the scale.
 * Coin 13 is not included in this weighing.
 **/

const Weigh2 = {
  HeavierOnLeft: {Left: [1, 2, 3], Right: [4, 5, 6]},
  HeavierOnRight: {Left: [7, 8, 9], Right: [10, 11, 12]},
  EqualWeight: {Left: [1], Right: [13]},
} as const satisfies WeighingSetup2
/**
 * Weigh2: Determines the second weighing setup based on the outcome of the first weighing
 *
 * If the left side is heavier:
 *    { Left: [1, 2, 3], Right: [4, 5, 6] }
 * If the right side is heavier:
 *    { Left: [7, 8, 9], Right: [10, 11, 12] }
 * If both sides are equal:
 *    { Left: [1], Right: [13] }
 */

const Weigh3 = {
  HeavierOnLeft: {
    HeavierOnLeft: {Left: [1], Right: [2]},
    HeavierOnRight: {Left: [4], Right: [5]},
    EqualWeight: {Left: [], Right: []}
  },
  HeavierOnRight: {
    HeavierOnLeft: {Left: [7], Right: [8]},
    HeavierOnRight: {Left: [10], Right: [11]},
    EqualWeight: {Left: [], Right: []}
  },
  EqualWeight: {
    HeavierOnLeft: {Left: [], Right: []},
    HeavierOnRight: {Left: [], Right: []},
    EqualWeight: {Left: [], Right: []}
  }
} as const satisfies WeighingSetup3
/**
 * Weigh3: Determines the third weighing setup based on the outcome of the first and second weighings
 *
 * If Outcome1 indicates the left side is heavier:
 *    - If Outcome2 also indicates the left side is heavier:
 *        { Left: [1], Right: [2] }
 *    - If Outcome2 indicates the right side is heavier:
 *        { Left: [4], Right: [5] }
 *    - Otherwise:
 *        { Left: [], Right: [] }
 *
 * If Outcome1 indicates the right side is heavier:
 *    - If Outcome2 indicates the left side is heavier:
 *        { Left: [7], Right: [8] }
 *    - If Outcome2 also indicates the right side is heavier:
 *        { Left: [10], Right: [11] }
 *    - Otherwise:
 *        { Left: [], Right: [] }
 *
 * If Outcome1 indicates both sides are equal:
 *    - If Outcome2 indicates the left side is heavier:
 *        { Left: [], Right: [] }
 *    - If Outcome2 indicates the right side is heavier:
 *        { Left: [], Right: [] }
 *    - Otherwise:
 *        { Left: [], Right: [] }
 */

/**
 * Instructions to Solve the Puzzle:
 *
 * 1. Check value of GameOutcome1, GameOutcome2, GameOutcome3 to find out why it is not solved
 *
 * 2. Why It Is Not Working:
 *    - The above template assumes the fake coin is heavier than the real coin. This assumption might not always hold true.
 *
 * 3. Guide to Revise All Three Weigh Types:
 *    - `Weigh1`, `Weigh2`, `Weigh3`: Ensure that the weighing setup is designed so that no matter which coin is fake, it can be identified.
 *    - Coins not appearing in previous weighing setups can also be used.
 */
printFakeCoin(Weigh1, Weigh2, Weigh3)

/* Mouseover `GameOutcome1` to view Outcome 1 */
export type GameOutcome1 = PrintOutcome1<typeof Weigh1, typeof Weigh2, typeof Weigh3>
/* Mouseover `GameOutcome2` to view Outcome 2 */
export type GameOutcome2 = PrintOutcome2<typeof Weigh1, typeof Weigh2, typeof Weigh3>
/* Mouseover `GameOutcome3` to view Outcome 3 */
export type GameOutcome3 = PrintOutcome3<typeof Weigh1, typeof Weigh2, typeof Weigh3>
