import type { Equal, Expect } from '@type-challenges/utils'

type UnidentifiedFakeCoins = FindUnidentifiedFakeCoins<typeof Weigh1, typeof Weigh2, typeof Weigh3>
type UnknownFakeCoinStatuses = FindUnknownFakeCoinStatuses<typeof Weigh1, typeof Weigh2, typeof Weigh3>

type cases = [
  Expect<Equal<UnidentifiedFakeCoins, never>>,
  Expect<Equal<HasMoreCoinsThan<UnknownFakeCoinStatuses, 1>, false>>,
]

declare function printFakeCoin<
  Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3,
  UnidentifiedFakeCoins extends [Coins, FakeCoinStatuses] = FindUnidentifiedFakeCoins<Setup1, Setup2, Setup3>,
  UnknownFakeCoinStatuses extends Coins = FindUnknownFakeCoinStatuses<Setup1, Setup2, Setup3>,
  Unidentified extends Coins = [UnidentifiedFakeCoins] extends [never] ? HasMoreCoinsThan<UnknownFakeCoinStatuses, 1> extends false ? never : UnknownFakeCoinStatuses : UnidentifiedFakeCoins[0]
  >(
    s1: Setup1, s2: Setup2,
    s3: [Unidentified] extends [never] ? Setup3 : {error: `Unidentified: ${Unidentified}`}
  ): void

// Defines possible outcomes to determine the weight relationship between two groups of coins
type WeighingOutcome = 'HeavierOnLeft' | 'HeavierOnRight' | 'EqualWeight'
type WeighingResult = {Heavier: Coins, Lighter: Coins, Equal: Coins}

type FakeCoinStatuses = 'Heavier' | 'Lighter'

type DetermineOutcome<Setup extends WeighingSetup1, FakeCoin extends Coins, FakeCoinStatus extends FakeCoinStatuses>
  = [Setup] extends [never] ? never
  : IsCoinsValid<Setup['Left'], Setup['Right']> extends false ? never
  : HasMoreCoinsThan<Setup['Left'][number], Setup['Right'][number]> extends true ? 'HeavierOnLeft'
  : HasMoreCoinsThan<Setup['Right'][number], Setup['Left'][number]> extends true ? 'HeavierOnRight'
  : [FakeCoin, FakeCoinStatus] extends [Setup['Left'][number], 'Heavier'] | [Setup['Right'][number], 'Lighter'] ? 'HeavierOnLeft'
  : [FakeCoin, FakeCoinStatus] extends [Setup['Right'][number], 'Heavier'] | [Setup['Left'][number], 'Lighter'] ? 'HeavierOnRight'
  : 'EqualWeight'

type DetermineResult<Setup extends WeighingSetup1, FakeCoin extends Coins, FakeCoinStatus extends FakeCoinStatuses>
  = [Setup] extends [never] ? never
  : IsCoinsValid<Setup['Left'], Setup['Right']> extends false ? never
  : HasMoreCoinsThan<Setup['Left'][number], Setup['Right'][number]> extends true ? {Heavier: Setup['Left'][number], Lighter: Setup['Right'][number], Equal: never}
  : HasMoreCoinsThan<Setup['Right'][number], Setup['Left'][number]> extends true ? {Heavier: Setup['Right'][number], Lighter: Setup['Left'][number], Equal: never}
  : [FakeCoin, FakeCoinStatus] extends [Setup['Left'][number], 'Heavier'] | [Setup['Right'][number], 'Lighter'] ? {Heavier: Setup['Left'][number], Lighter: Setup['Right'][number], Equal: never}
  : [FakeCoin, FakeCoinStatus] extends [Setup['Right'][number], 'Heavier'] | [Setup['Left'][number], 'Lighter'] ? {Heavier: Setup['Right'][number], Lighter: Setup['Left'][number], Equal: never}
  : {Heavier: never, Lighter: never, Equal: Setup['Left'][number] | Setup['Right'][number]}

type IsCoinsValid<Left extends readonly Coins[], Right extends readonly Coins[]>
  = number extends Left | Right ? false
  : [ keyof {[I in keyof Left & `${number}` as keyof {[J in Exclude<keyof Left & `${number}`, I> as Left[I] extends Left[J] ? J : never]: J}]: I} | 
      keyof {[I in keyof Right & `${number}` as keyof {[J in Exclude<keyof Right & `${number}`, I> as Right[I] extends Right[J] ? J : never]: J}]: I}
  ] extends [never]
    ? [Left[number] & Right[number]] extends [never] ? true
    : false
  : false

type HasMoreCoinsThan<A extends Coins, B extends Coins>
  = [A, B] extends [never, never] ? false
  : [A] extends [never] ? false
  : [B] extends [never] ? true
  : true extends {[X in A]: {[Y in B]: HasMoreCoinsThan<Exclude<A, X>, Exclude<B, Y>>}[B]}[A] ? true : false

type OneCoinOrNever<LeftOrRight extends Coins, U extends Coins = LeftOrRight>
  = [U] extends [never] ? never
  : [U extends U ? Exclude<LeftOrRight, U> : never] extends [never] ? U
  : never

type FindUnidentifiedFakeCoins<Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3>
  = {[FakeCoin in Coins]: {[FakeCoinStatus in FakeCoinStatuses]
      : DetermineOutcome<Setup1, FakeCoin, FakeCoinStatus> extends infer Outcome1 extends WeighingOutcome
        ? DetermineOutcome<Setup2[Outcome1], FakeCoin, FakeCoinStatus> extends infer Outcome2 extends WeighingOutcome
          ? DetermineFakeCoin<DetermineResult<Setup1, FakeCoin, FakeCoinStatus>
            | DetermineResult<Setup2[Outcome1], FakeCoin, FakeCoinStatus>
            | DetermineResult<Setup3[Outcome1][Outcome2], FakeCoin, FakeCoinStatus>
            > extends FakeCoin ? never
          : [FakeCoin, FakeCoinStatus]
        : [FakeCoin, FakeCoinStatus]
      : [FakeCoin, FakeCoinStatus]
    }[FakeCoinStatuses]}[Coins]

type FindUnknownFakeCoinStatuses<Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3>
  = {[FakeCoin in Coins]: {[FakeCoinStatus in FakeCoinStatuses]
      : DetermineOutcome<Setup1, FakeCoin, FakeCoinStatus> extends infer Outcome1 extends WeighingOutcome
        ? DetermineOutcome<Setup2[Outcome1], FakeCoin, FakeCoinStatus> extends infer Outcome2 extends WeighingOutcome
          ? DetermineFakeCoin<DetermineResult<Setup1, FakeCoin, FakeCoinStatus>
            | DetermineResult<Setup2[Outcome1], FakeCoin, FakeCoinStatus>
            | DetermineResult<Setup3[Outcome1][Outcome2], FakeCoin, FakeCoinStatus>
            > extends FakeCoin
            ? UnknownFakeCoinStatus<FakeCoin, DetermineResult<Setup1, FakeCoin, FakeCoinStatus>
              | DetermineResult<Setup2[Outcome1], FakeCoin, FakeCoinStatus>
              | DetermineResult<Setup3[Outcome1][Outcome2], FakeCoin, FakeCoinStatus>
              >
          : FakeCoin
        : FakeCoin
      : FakeCoin
    }[FakeCoinStatuses]}[Coins]

type ExtractOne<U> = (U extends U ? (_: Promise<U>) => U : U) extends ((_: infer I extends Promise<U>) => U) ? Awaited<I> : never

type PrintOutcome1<Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3>
  = ExtractOne<FindUnidentifiedFakeCoins<Setup1, Setup2, Setup3>> extends [infer FakeCoin extends Coins, infer FakeCoinStatus extends FakeCoinStatuses]
    ? PrintOutcome<Setup1['Left'][number], Setup1['Right'][number], FakeCoin, FakeCoinStatus, `# 1st Weight Outcome, fake coin is ${FakeCoin} and it's ${FakeCoinStatus}`> : 'You solved it!'

type PrintOutcome2<Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3>
  = ExtractOne<FindUnidentifiedFakeCoins<Setup1, Setup2, Setup3>> extends [infer FakeCoin extends Coins, infer FakeCoinStatus extends FakeCoinStatuses]
    ? DetermineOutcome<Setup1, FakeCoin, FakeCoinStatus> extends infer Outcome1 extends WeighingOutcome
      ? PrintOutcome<Setup2[Outcome1]['Left'][number], Setup2[Outcome1]['Right'][number], FakeCoin, FakeCoinStatus, `# 2nd Weight Outcome, fake coin is ${FakeCoin} and it's ${FakeCoinStatus}`> : 'You solved it!'
    : 'Incorrect weigh setup 1'

type PrintOutcome3<Setup1 extends WeighingSetup1, Setup2 extends WeighingSetup2, Setup3 extends WeighingSetup3>
  = ExtractOne<FindUnidentifiedFakeCoins<Setup1, Setup2, Setup3>> extends [infer FakeCoin extends Coins, infer FakeCoinStatus extends FakeCoinStatuses]
    ? DetermineOutcome<Setup1, FakeCoin, FakeCoinStatus> extends infer Outcome1 extends WeighingOutcome
      ? DetermineOutcome<Setup2[Outcome1], FakeCoin, FakeCoinStatus> extends infer Outcome2 extends WeighingOutcome
        ? PrintOutcome<Setup3[Outcome1][Outcome2]['Left'][number], Setup3[Outcome1][Outcome2]['Right'][number], FakeCoin, FakeCoinStatus, `# 3rd Weight Outcome, fake coin is ${FakeCoin} and it's ${FakeCoinStatus}`> : 'You solved it!'
      : 'Incorrect weigh setup 2'
    : 'Incorrect weigh setup 1'

type PrintOutcome<Left extends Coins, Right extends Coins, FakeCoin extends Coins, FakeCoinStatus extends FakeCoinStatuses, Message extends string>
  = true extends (FakeCoin extends Left ? FakeCoinStatus extends 'Lighter' ? true : false : false) | (FakeCoin extends Right ? FakeCoinStatus extends 'Heavier' ? true : false : false)
    ? Merge<{[P in PrintMessageFixedWidth<Message>]: 1} & {[P in
`${PrintCoinsFixedWidth<Left>}                                 `]: 1} & {[P in
`[===========================]    ${PrintCoinsFixedWidth<Right>}`]: 1} & {
'               [O]               [===========================]': 1
'                                             [O]              ': 1
'                              [O]                             ': 1}>
  : true extends (FakeCoin extends Left ? FakeCoinStatus extends 'Heavier' ? true : false : false) | (FakeCoin extends Right ? FakeCoinStatus extends 'Lighter' ? true : false : false)
    ? Merge<{[P in PrintMessageFixedWidth<Message>]: 1} & {[P in
`                                 ${PrintCoinsFixedWidth<Right>}`]: 1} & {[P in
`${PrintCoinsFixedWidth<Left>}    [===========================]`]: 1} & {
'[===========================]                [O]              ': 1
'               [O]                                            ': 1
'                              [O]                             ': 1}>
  : Merge<{[P in PrintMessageFixedWidth<Message>]: 1} & {[P in
`${PrintCoinsFixedWidth<Left>}    ${PrintCoinsFixedWidth<Right>}`]: 1} & {
'[===========================]    [===========================]': 1
'             [O]                              [O]             ': 1
'                              [O]                             ': 1}>

type PrintMessageFixedWidth<Message extends string>
  = Message extends `${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}` ? Message
  : PrintMessageFixedWidth<`${Message} `>
type PrintCoinsFixedWidth<C extends Coins, Output extends string = PrintCoins<C>, PadLeft = true>
  = Output extends `${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}${any}` ? Output
  : PadLeft extends true ? PrintCoinsFixedWidth<C, ` ${Output}`, false> : PrintCoinsFixedWidth<C, `${Output} `, true>
type PrintCoins<C extends Coins, C1 extends Coins = ExtractOne<C>> = [C1] extends [never] ? '' : `${C1} ${PrintCoins<Exclude<C, C1>>}`

type Merge<O> = {[K in keyof O]: O[K]}

/*******************************************
 *             Spoiler Alert
 *******************************************
 */
type DetermineFakeCoin<Results extends WeighingResult, O extends Results = Results>
  = (O extends O
      ? O extends {Heavier: Coins, Lighter: Coins}
        ? O['Heavier'] extends IdentifiedRealCoin<Results> ? OneCoinOrNever<Exclude<O['Lighter'], IdentifiedRealCoin<Results>>>
        : O['Lighter'] extends IdentifiedRealCoin<Results> ? OneCoinOrNever<Exclude<O['Heavier'], IdentifiedRealCoin<Results>>>
        : never
      : never
    : never) extends infer FakeCoin extends Coins
      ? [FakeCoin] extends [never] ? Exclude<Coins, IdentifiedRealCoin<Results>>
      : FakeCoin
    : Exclude<Coins, IdentifiedRealCoin<Results>>

type IdentifiedRealCoin<Results extends WeighingResult, C extends Coins = Coins>
  = C extends C
    ? C extends Results['Heavier'] & Results['Lighter'] ? C
    : C extends Results['Equal'] ? C
    : never
  : never

type UnknownFakeCoinStatus<FakeCoin extends Coins, Reaults extends WeighingResult, O extends Reaults = Reaults>
  = FakeCoin extends (O extends O ? O['Heavier'] | O['Lighter'] | O['Equal'] : never) ? never : FakeCoin
