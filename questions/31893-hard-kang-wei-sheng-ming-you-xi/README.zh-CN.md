康威生命游戏是一种有意思的游戏。
它的游戏进行在一个方格布上，每个方格或生或死，根据当前的方格布可推断出下一刻方格布的方格排列，推断规则如下：

- 如果一个方格是死的，周围八个格有三个是活的，那它下一刻就被救活了；否则这个方格仍然是死的。
- 如果一个方格是活的，周围八个格有两或三个是活的，那它下一刻就继续活着，否则要么因方格太少抑郁孤独而死，要么因方格太多被挤死。

这个游戏的胜利条件是你开心。只要你看你的方格布看得很开心，你就胜利了。

现在可以在 TS 中表示一盘如此的 $8 \times 8$ 康威生命游戏：
```ts
type Status = 'o' | 'x';
type Line = `${Status}${Status}${Status}${Status}${Status}${Status}${Status}${Status}`;
type LifeGame = [Line, Line, Line, Line, Line, Line, Line, Line];
type LifeGame0 = [
  'xxxxxxxx',
  'xxxxoxxx',
  'xxooxxxx',
  'xxoxxoox',
  'xxxxxxxx',
  'xxxxoxxx',
  'xxxooxxx',
  'xxxxxxxx',
];
```
其中， `o` 表示活着， `x` 表示死掉了；一个字符串表示一行，数组中有八个字符串表示有八行。
`LifeGame0` 表示一盘进行当中的生命游戏。
在本挑战中你不需要考虑边缘外的方格。

现在，希望你能设计一个康威生命游戏的计算器，给定游戏进行的时间和初始的方格布，推算出到时间时的方格布是什么样子。
