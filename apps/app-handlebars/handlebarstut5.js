// Assign the template name
var templateInfo = document.getElementById("the-template").innerHTML;

// Compile the template
var template = Handlebars.compile(templateInfo);

// 11b. A partial is registered with registerPartial
Handlebars.registerPartial('myName', '{{name}}');

// 12. Define the partial name and then substitute the
// passed tags and the data
var askQuestionPartial = '<{{tagName}}>author: {{author}}</{{tagName}}>'
    + '<div class="comment">comment: {{comment}}</div>';
Handlebars.registerPartial('askQuestion', askQuestionPartial);

var templateJson = {
    name: "Derek",
    author: "John Smith",
    comment: "Where should we vacation?",
    comments: [{
        author: "Sue Smith",
        comment: "The beach"
    },
    {
        author: "Paul Smith",
        comment: "Disneyworld"
    }]
};
var templateData = template(templateJson);

document.getElementById('contentDiv').innerHTML += templateData;