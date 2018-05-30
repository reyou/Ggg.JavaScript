// https://jakearchibald.com/2017/es-modules-in-browsers/
export function addTextToElement(id, text) {
    $("#" + id).html(text);
}
export function changeElementBorderColor(id, color) {
    $("#" + id).css("border", "solid 1px " + color);
}