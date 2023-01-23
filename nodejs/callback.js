/* 
"I will call back later!" 
A callback is a function passed as 
an argument to another function.
*/

function one() {
    console.log("one");
}

// function two() {
//     console.log("two");
// }

function two(mycallback) {
    console.log("two");

    mycallback();
}

function three() {
    console.log("three");
}

one();
// two();
setTimeout(two, 1000,three);
three();