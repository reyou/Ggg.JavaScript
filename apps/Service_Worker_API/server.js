// https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
var express = require('express');
var app = express();
var path = require('path');
//=============================================================================
// https://expressjs.com/en/starter/static-files.html
app.use('/', express.static(__dirname + '/public'));
app.use('/sw-test', express.static(__dirname + '/sw-test'));
app.use('/sw-test/gallery', express.static(__dirname + '/sw-test/gallery'));
//=============================================================================
app.get('/', function (req, res) {
    res.status(200).send('ok');
});

// http://localhost:3000/serviceWorkers/index.html
// http://localhost:3000/simple-web-worker-gh-pages/index.html
// http://localhost:3000/imgLoad/imgLoad.html
app.get('/:folderName/:fileName', function (req, res) {
    let folderName = req.params.folderName;
    let fileName = req.params.fileName;
    // console.log(fileName);
    res.sendFile(path.join(__dirname + '/' + folderName + '/' + fileName));
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});
//=============================================================================