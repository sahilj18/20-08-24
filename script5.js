"use strict"

function move(char, step) {
const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const indexChar = alpha.indexOf(char);
let finalIndex = indexChar + step;

if (finalIndex > 25) {
    finalIndex = finalIndex % 26;
}

const finalChar = alpha[finalIndex];
return finalChar;

//Find index of char
// let index = alpha.indexOf(char);
// index += 1;
// console.log(alpha[index]);
}
const x = move ("z", 4);
console.log(x);
const y = move ("D", 6);
console.log(y);

// move1("f");