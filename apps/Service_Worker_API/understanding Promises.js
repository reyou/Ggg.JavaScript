// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function imgLoad(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        request.onload = function () {
            if (request.status == 200) {
                //debugger;
                //resolve(request.response);
                resolve(request.responseText);
            } else {
                var err = Error('Image didn\'t load successfully; error code:' + request.statusText);
                reject(err);
            }
        };

        request.onerror = function () {
            reject(Error('There was a network error.'));
        };

        request.send();
    });
}

let imgUrl = "https://image.ibb.co/gh4OL7/image.png";
imgLoad(imgUrl)
    .then(data => {
        console.log("data:");
        console.log(data.substring(0, 10));
    })
    .catch(ex => {
        console.log("ex:");
        console.log(ex);
    });