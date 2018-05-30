function getImageList() {
    let resultText = document.querySelector("#resultText");
    var request = new XMLHttpRequest();
    let url = "/sw-test/image-list.js";
    request.open('GET', url);
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
    // request.responseType = 'json';
    request.onload = function () {
        if (request.status == 200) {
            resultText.value = request.responseText;
        } else {
            resultText.value = "Error: " + request.status;
        }
    };

    request.onerror = function () {
        resultText.value = 'There was a network error.'
    };

    // Send the request
    request.send();
}