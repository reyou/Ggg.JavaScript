// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday2 = new Date('1995-12-17T03:24:00');
var birthday3 = new Date(1995, 11, 17);
var birthday4 = new Date(1995, 11, 17, 3, 24, 0);
console.log("today:", today);
console.log("birthday:", birthday);
console.log("birthday2:", birthday2);
console.log("birthday3:", birthday3);
console.log("birthday4:", birthday4);

