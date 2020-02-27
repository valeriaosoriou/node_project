//core modules
const http = require('http'); //provides server
const fs = require('fs'); //use this for file transaction
const path = require('path');

const server = http.createServer((req, res)=>{
   // res.writeHead(200 , {'Content-Type' : 'text/plain'})
   // res.write("Hello");
   // res.end();
	console.log(`${req.method} request for ${req.url} `);

	if (req.method === 'GET'){ //
		if (req.url === '/') { //what page they want
       		fs.readFile('./public/index.html','UTF-8', (err,data)=>{ // file system "fs"
        	if (err) throw err;
        	res.writeHead(200, {'Content-Type' : 'text/html'});
        	res.end(data);
    		}) //end fs.readFile

    	}else if (req.url === '/index.html') {
       		fs.readFile('./public/index.html', 'UTF-8', (err,data)=>{
       		if (err) throw err;
       		res.writeHead(200, {'Content-Type': 'text/html'});
       		res.end(data);
       		})//end fs.readfile

       	}else if (req.url === '/about.html') {
       		fs.readFile('./public/about.html', 'UTF-8', (err,data)=>{
       		if (err) throw err;
       		res.writeHead(200, {'Content-Type': 'text/html'});
       		res.end(data);
       		})//end fs.readfile
       }
   }

 }); //end const server

 server.listen(3000);
 console.log("running node server at port 3000");