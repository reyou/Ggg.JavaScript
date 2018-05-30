// https://www.w3schools.com/js/js_errors.asp
var x;
try {
    x = y + 1;   // y cannot be referenced (used)
}
catch (err) {
    console.log("err.name: ", err.name);
    console.log("err.message: ", err.message);
    console.log("err.stack: ", err.stack);
    console.log("err: ", JSON.stringify(err));
}

