//=============================================================================
"use strict";
let GggHttp = require('./GggHttp');
let gggHttp = new GggHttp();
console.log("\n FetchAndLog: ");
const gggUrl = "https://api.github.com/";
gggHttp.FetchJsonAndLog(gggUrl);

