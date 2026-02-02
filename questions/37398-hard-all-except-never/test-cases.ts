declare const x0: never;
declare const x1: void;
declare const x2: unknown;
declare const x3: never[];
declare const x4: 1 | 2 | 3n;
declare const x5: string;
declare const x6: boolean | number;
declare const x7: undefined | {a: 123} | VoidFunction;
declare const x8: string[];
declare const x9: {} | [];
declare const x10: any;


// @ts-expect-error
myFunc(x0);

myFunc(x1);
myFunc(x2);
myFunc(x3);
myFunc(x4);
myFunc(x5);
myFunc(x6);
myFunc(x7);
myFunc(x8);
myFunc(x9);
myFunc(x10);
