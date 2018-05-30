function imgLoad(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response);
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