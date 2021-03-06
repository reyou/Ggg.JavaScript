// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

// sort by value
items.sort(function(a, b) {
  return a.value - b.value;
});

console.log("Sorted By: a.value - b.value\n");
for (let i = 0; i < items.length; i++) {
  console.log(JSON.stringify(items[i]));
}

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log("\n\nSorted By: nameA < nameB\n");
for (let i = 0; i < items.length; i++) {
  console.log(JSON.stringify(items[i]));
}

/*
Sorted By: a.value - b.value

intro1.js:16
{"name":"The","value":-12}
intro1.js:18
{"name":"Magnetic","value":13}
intro1.js:18
{"name":"Edward","value":21}
intro1.js:18
{"name":"Sharpe","value":37}
intro1.js:18
{"name":"Zeros","value":37}
intro1.js:18
{"name":"And","value":45}
intro1.js:18


Sorted By: nameA < nameB

intro1.js:35
{"name":"And","value":45}
intro1.js:37
{"name":"Edward","value":21}
intro1.js:37
{"name":"Magnetic","value":13}
intro1.js:37
{"name":"Sharpe","value":37}
intro1.js:37
{"name":"The","value":-12}
intro1.js:37
{"name":"Zeros","value":37}
*/
