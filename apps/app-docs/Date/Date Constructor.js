// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log("\ndate1 === date2:");
console.log(date1 === date2);
// expected output: false;

console.log("\ndate1 == date2:");
console.log(date1 == date2);

console.log("\ndate1 - date2:");
console.log(date1 - date2);
// expected output: 0

console.log("\ndate1:");
console.log(date1);
console.log("\ndate2:");
console.log(date2);