// function for loading each image via XHR

function imgLoad(imgJSON) {
    // return a promise for an image loading
    let imgPromise = function (resolve, reject) {
        var request = new XMLHttpRequest();
        // gggEdit
        let imgUrl = "/sw-test/" + imgJSON.url
        request.open('GET', imgUrl);
        request.responseType = 'blob';
        // http://localhost:3000/ServiceWorkers/gallery/myLittleVader.jpg
        request.onload = function () {
            if (request.status == 200) {
                var arrayResponse = [];
                arrayResponse[0] = request.response;
                arrayResponse[1] = imgJSON;
                resolve(arrayResponse);
            } else {
                reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
            }
        };

        request.onerror = function () {
            reject(Error('There was a network error.'));
        };

        // Send the request
        request.send();
    };
    return new Promise(imgPromise);
}