let map = new Map();

map.set('1', 'string');
map.set(1, 'number');
map.set(true, 'boolean');
map.set(123, true);

console.log("Map ==> ", map);

console.log("Map Size ==> ", map.size);

console.log("Map.get(1) ==> ", map.get(1));

console.log("Map.get('1') ==> ", map.get("1"));

console.log("Map.get(123) ==> ", map.get(123));

console.log("Map.get(true) ==> ", map.get(true));