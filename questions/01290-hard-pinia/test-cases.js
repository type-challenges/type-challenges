"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store = defineStore({
    id: '',
    state: () => ({
        num: 0,
        str: '',
    }),
    getters: {
        stringifiedNum() {
            // @ts-expect-error
            this.num += 1;
            return this.num.toString();
        },
        parsedNum() {
            return parseInt(this.stringifiedNum);
        },
    },
    actions: {
        init() {
            this.reset();
            this.increment();
        },
        increment(step = 1) {
            this.num += step;
        },
        reset() {
            this.num = 0;
            // @ts-expect-error
            this.parsedNum = 0;
            return true;
        },
        setNum(value) {
            this.num = value;
        },
    },
});
// @ts-expect-error
store.nopeStateProp;
// @ts-expect-error
store.nopeGetter;
// @ts-expect-error
store.stringifiedNum();
store.init();
// @ts-expect-error
store.init(0);
store.increment();
store.increment(2);
// @ts-expect-error
store.setNum();
// @ts-expect-error
store.setNum('3');
store.setNum(3);
const r = store.reset();
