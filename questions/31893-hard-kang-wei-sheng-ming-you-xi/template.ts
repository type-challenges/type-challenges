type Status = 'o' | 'x';
type Line = `${Status}${Status}${Status}${Status}${Status}${Status}${Status}${Status}`;
type LifeGame = [Line, Line, Line, Line, Line, Line, Line, Line];
type GotLifeGame<T extends number, B extends LifeGame> = any
