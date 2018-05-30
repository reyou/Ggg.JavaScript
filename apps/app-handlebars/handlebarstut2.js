var quoteInfo = document.getElementById("quote-template").innerHTML;
var gggInfo = document.getElementById("ggg-template").innerHTML;
var template = Handlebars.compile(quoteInfo);
var ggg = Handlebars.compile(gggInfo);      
// 2b. Passing the array data
var quoteJson = {
    name: "Yogi Berra",
    quotes: [
        {
            quote: "If you don't know where you are going, you might wind up someplace else."
        },
        {
            quote: "You better cut the pizza in four pieces because I'm not hungry enough to eat six."
        },
        {
            quote: "I never said most of the things I said."
        },
        {
            quote: "Nobody goes there anymore because it's too crowded."
        }
    ],
    // 3b. Passing tags to the triple stash
    yogiBio: `<i>Lawrence Peter "Yogi" Berra (May 12, 1925 - September 22, 2015) was an 
        American professional baseball catcher, manager, and coach who played 19 seasons in Major 
        League Baseball (MLB) (1946 - 63, 1965), all but the last for the New York Yankees. 
        An 18-time All-Star and 10-time World Series champion as a player, Berra had a career batting average of 
        .285, while compiling 358 home runs and 1,430 runs batted in.</i>`
    // 6c. Say hello in passed language
    ,
    data: {
        lang: "spanish"
    }
};
var gggJson = {
    title: "Ggg Title"
}
var quoteData = template(quoteJson);
gggData = ggg(gggJson);
document.getElementById('quoteData').innerHTML += quoteData;
document.getElementById("gggData").innerHTML = gggData;