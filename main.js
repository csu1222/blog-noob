var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
// var sanitizeHtml = require('sanitize-html');


var app = http.createServer(function(req, res){
    var _url = req.url;
    const params = new URLSearchParams('https://google.com/aiasjdflkasdf'.search)
      console.log(params);
    res.writeHead(200);
    res.end(`${_url}`)
})

app.listen(4000);