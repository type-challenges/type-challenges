"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promiseAllTest1 = PromiseAll([1, 2, 3]);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll([1, 2, 3]);
