// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// Deprecated method, 98 maps to 1998 here as well
date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
console.log("date:", date);
date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
console.log("date:", date);