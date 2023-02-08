type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T> = T extends unknown[] ? T['length'] : never
type LengthV2<T extends unknown[]> = T['length']

