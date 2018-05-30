const getMessage = () => "Hello World";
$(document).ready(() => {
    document.getElementById('output').innerHTML = getMessage();
});