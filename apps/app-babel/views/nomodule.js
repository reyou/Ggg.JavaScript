function addTextToElement(id, text) {
    $("#" + id).html(text);
}
$(document).ready(function () {
    addTextToElement("modulediv", 'GggMessage: YOUR BROWSER DO NOT SUPPORT MODULES.');
});