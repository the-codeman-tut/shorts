
let set = new Set(["orange", "apple", "banana"]);

console.log("set ==> ", set);

set.add("pineapple");
set.add("apple");

console.log("set ==> ", set);

console.log("set size ==> ", set.size);

console.log("set has ==> ", set.has("orange"));

console.log("set has ==> ", set.has("avacado"));

set.delete("orange");

console.log("set ==> ", set);