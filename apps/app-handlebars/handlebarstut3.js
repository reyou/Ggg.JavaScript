// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;
// Compile the template
var template = Handlebars.compile(templateInfo);
// If there is nothing to pass keep this blank
var templateData = template({});
document.getElementById('contentDiv').innerHTML += templateData;