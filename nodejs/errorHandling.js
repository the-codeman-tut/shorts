"use strict";
try {
    let lalala = 10;
    console.log("inside try : ", lalala);
} catch (error) {
    console.log("============== inside catch =================");

    console.log(error.name); 
    console.log(error.message); 
    console.log(error); 

    console.log("============== inside catch =================");
}

console.log("After try catch");