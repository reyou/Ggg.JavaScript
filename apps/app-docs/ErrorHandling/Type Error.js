// https://www.w3schools.com/js/js_errors.asp
var num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log("err.name: ", err.name);
    console.log("err.message: ", err.message);
    console.log("err.stack: ", err.stack);
    console.log("err: ", JSON.stringify(err));
}

