"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Edge cases
const noCharsOutput = join('-')();
const oneCharOutput = join('-')('a');
const noDelimiterOutput = join('')('a', 'b', 'c');
// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c');
const hashOutput = join('#')('a', 'b', 'c');
const twoCharOutput = join('-')('a', 'b');
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
