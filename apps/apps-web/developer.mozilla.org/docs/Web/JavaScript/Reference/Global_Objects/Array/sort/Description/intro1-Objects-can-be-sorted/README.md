- If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first).

- If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.

- If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first).
  compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

```
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
```
