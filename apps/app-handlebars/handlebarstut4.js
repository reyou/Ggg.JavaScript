// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;

// Compile the template
var template = Handlebars.compile(templateInfo);

var templateJson = {
    title: "Harry Potter and the Philosopher's Stone",
    techData: {
        isbn: "0-7475-3269-9",
        author: "J. K. Rowling"
    }
};
var templateData = template(templateJson);
document.getElementById('contentDiv').innerHTML += templateData;