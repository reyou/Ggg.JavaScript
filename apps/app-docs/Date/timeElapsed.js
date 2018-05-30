var dt = new Date();
console.log("Initial Time: ", dt);
setTimeout(() => {
    var dt2 = new Date();
    console.log((dt2 - dt) / 1000, "seconds elapsed.");
}, 2000);