// https://codeforgeek.com/2015/01/render-html-file-expressjs/
var express = require('express');
var router = express.Router();
var path = require("path");
/* GET gggbabelcore listing. */
router.get('/', function (req, res, next) {
    //console.log("gggbabelcore is running...");
    //res.send('respond with a resource');
    //  res.sendFile(path.join(__dirname+'/index.html'));
    res.sendFile(path.join(__dirname, '../views/gggbabelcore.html'));
});

module.exports = router;