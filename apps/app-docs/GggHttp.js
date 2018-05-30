"use strict";
// https://www.npmjs.com/package/request
var request = require('request');
// https://www.npmjs.com/package/node-fetch
var fetch = require('node-fetch');
var fs = require('fs');
class GggHttp {
    constructor() {

    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    // const url = "http://localhost:3010/widgets";
    // window.fetch
    FetchJsonAndLog(url) {
        fetch(url).
            then(res => res.json())
            .then(results => {
                console.log(results);
            }).catch(err => {
                console.error(err);
            });
    }
    /*var gggHttp = new GggHttp();
    gggHttp.MakeRequest("http://www.gamegogo.org");*/
    MakeRequest(url) {
        request(url, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log('body:', body); // Print the HTML for the Google homepage. 
        });
    }
    // gggHttp.GetFileStream("http://www.gamegogo.org", "ggg.txt");
    SaveFileStream(url, fileName) {
        request(url).pipe(fs.createWriteStream(fileName))
    }
    // gggHttp.PushFileStream("file.json", "http://mysite.com/obj.json");
    PushFileStream(filePath, pushUrl) {
        fs.createReadStream(filePath).pipe(request.put(pushUrl))
    }
    // 
    // lp; https://www.npmjs.com/package/request 
    // Request can also pipe to itself. When doing so, content-type and content-length are preserved in the PUT headers.
}

module.exports = GggHttp;

