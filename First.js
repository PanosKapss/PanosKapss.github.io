//Αρχικοποιηση Server
const http = require('http');
const hostname = 'localhost';
const port = 4000;

const server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});      // 200 Means OK
res.end('Server running!!');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})

//Αρχικοποιηση Server Για HTML
const fs = require('fs');
const url = require('url');
const port2 = process.env.port2 || 4000;
http.createServer(function (req, res) {
let pathname = url.parse(req.url, true).pathname;
//handle root
if (pathname==="/") pathname="/index";
//add .html if not specified
if (!pathname.toLowerCase().endsWith(".html"))
pathname+=".html";
let filename = __dirname + "/www" + pathname;
fs.readFile(filename, function (err, data) {
if (err) {
res.writeHead(404, { 'Content-Type': 'text/html' });
return res.end("404 Not Found");
}
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(data);
res.end();
});
}).listen(port2);
console.log("Running at port " + port2);






function ShowBio(){

}

function ShowImages(){


}



function ShowProjects(){

}


function ShowLinks(){

}

function Manage(){

   
}


function Connect(){


    const express = require('express');
    const app = express();
    const port3 = process.env.port3 || 4000;
    const users = { 'user1': 'password1', 'user2': 'password2' };
    const isAuthenticated = (req, res, next) => {
    const encodedAuth = (req.headers.authorization || '')
    .split(' ')[1] || '';
    const [name, password] = Buffer.from(encodedAuth, 'base64')
    .toString().split(':')
    // Check users credentials and return next if ok
    if (name && password === users[name])
    return next();
    // User is not authenticated give a reponse 401
    res.set('WWW-Authenticate', 'Basic realm="Access to Index"')
    res.status(401).send("Unauthorised access")
    }
    app.use(express.static(__dirname + "/www"));
    app.get('/api/data', isAuthenticated, function (req, res) {
    const data = [{ name: 'Nick', age: 21}, { name: 'Maris', age: 22 }];
    res.status(200).send(JSON.stringify(data));
    })
    app.listen(4000, function () {
    console.log("Server listening at port " + port3)
    })

    

}


function Disconnect(){

    alert("Please Log-in First!!");


}

function ManageProjects(){

    const express = require('express');
    const bodyParser = require("body-parser");
    const app = express();
    const port = process.env.port || 4000;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
    });
    app.post('/addBook', function (req, res) {
    let book = {
    author: req.body.author,
    title: req.body.title,
    year: req.body.year
    }
    res.send(book.title + ' Submitted Successfully!');
    });
    const server = app.listen(port, function () {
    console.log('Server is running at http://localhost:4000', port);
    });

}

function ManageLinks(){


}
