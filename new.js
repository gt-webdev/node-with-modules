var http = require("http");

var fs = require("fs");

http.createServer(function(req, res){
  console.log(req);
  fs.readFile("./myfile.txt", function(err, file){
    if (err){
      throw err;
    }
    res.end("hey, here's your response");
  });
}).listen(8080);
