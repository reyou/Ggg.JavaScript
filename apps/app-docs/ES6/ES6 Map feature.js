/*The Map object is a simple key/value map. 
Any value (both objects and primitive values) may be used as either 
a key or a value. Syntax [key, value]. e.g.*/
hash = new Map();
hash.set("hello", 42);
hash.set(1, 34);

console.log(hash); //Map {"hello" => 42, 1 => 34}
console.log(hash.get("hello"));
