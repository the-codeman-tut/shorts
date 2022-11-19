"use strict"

function greet() {
    console.log("Hoisted");
}

var x;

greet();
x = 10;
console.log(x);

