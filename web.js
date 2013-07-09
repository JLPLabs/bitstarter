var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//var data = fs.readFileSync("index.html");
//console.log(data.toString());

var buf = new Buffer(fs.readFileSync("index.html"));
console.log(buf.toString());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  //response.send(data.toString());
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});