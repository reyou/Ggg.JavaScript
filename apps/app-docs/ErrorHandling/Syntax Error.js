// https://www.w3schools.com/js/js_errors.asp
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
    console.log("err.name: ", err.name);
    console.log("err.message: ", err.message);
    console.log("err.stack: ", err.stack);
    console.log("err: ", JSON.stringify(err));
}

