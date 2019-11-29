/*var http=require('http');
http.createServer(function(req,res){
	res.writeHead(500,{'Content-type':'text/plain'});
	res.end('Hello');
}).listen(1337,'127.0.0.1');
console.log("Server is running");*/
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(404,{'Content-type':'text/html'});
		res.end(data)
	});
}).listen(1337,'127.0.0.1');
console.log('Server is Running.')