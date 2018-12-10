// https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
var date = new Date();
console.log("toDateString:", date.toDateString());
console.log("toISOString:", date.toISOString());
console.log("toJSON:", date.toJSON());
console.log("toLocaleDateString:", date.toLocaleDateString());
console.log("toLocaleString:", date.toLocaleString());
console.log("toLocaleTimeString:", date.toLocaleTimeString());
console.log("toString:", date.toString());
console.log("toTimeString:", date.toTimeString());
console.log("toUTCString:", date.toUTCString());
console.log("getTimezoneOffset:", date.getTimezoneOffset());
console.log("getUTCHours:", date.getUTCHours());
console.log("getUTCMonth:", date.getUTCMonth());

/*
toDateString: Sat Oct 13 2018
toISOString: 2018-10-13T17:03:40.466Z
toJSON: 2018-10-13T17:03:40.466Z
toLocaleDateString: 10/13/2018
toLocaleString: 10/13/2018, 1:03:40 PM
toLocaleTimeString: 1:03:40 PM
toString: Sat Oct 13 2018 13:03:40 GMT-0400 (Eastern Daylight Time)
toTimeString: 13:03:40 GMT-0400 (Eastern Daylight Time)
toUTCString: Sat, 13 Oct 2018 17:03:40 GMT
getTimezoneOffset: 240
getUTCHours: 17
getUTCMonth: 9
*/
