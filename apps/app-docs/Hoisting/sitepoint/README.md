//=============================================================================
Back to Basics: JavaScript Hoisting
https://www.sitepoint.com/back-to-basics-javascript-hoisting/
//=============================================================================
JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.
https://www.w3schools.com/js/js_hoisting.asp
//=============================================================================
Variable declarations are one of the most basic aspects of any programming language.
However, JavaScript has a little quirk, known as hoisting, which can turn an
innocent looking declaration into a subtle bug. This article explains what hoisting
is, and how you can avoid being burned by it.

JavaScript is an extremely flexible language, and will happily allow you to declare
a variable almost anywhere. For example, the following immediately-invoked
function expression (IIFE) declares three variables and then displays them using
an alert dialog box. As a side note, you should never use alert boxes, but we’re
trying to prove a point here.
//=============================================================================
Hoisting is an easy to understand, but often overlooked nuance of the JavaScript
language. Without a proper understanding of hoisting, your programs are susceptible
to subtle bugs. To help avoid these bugs, many developers (and linting tools)
advocate for a single variable declaration statement at the very beginning of
every scope. Since this is how the JavaScript interpreter essentially sees your
code, there is validity to this rule – even if I am personally guilty of
breaking it.
//=============================================================================
