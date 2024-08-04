const http = require('http');
const fs = require('fs');
// const path = require('path');

// const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const index = fs.readFileSync('#home');
const services = fs.readFileSync('#services-container');
const client = fs.readFileSync('#client-section');
const contact = fs.readFileSync('#contact');
const footer = fs.readFileSync('#footer');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    req=(url.req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
if(url == '/#home'){
    res.end(home);
}
else if(url == '/#services-container'){
    res.end(services);
}
else if(url == '/#client-section'){
    res.end(client);
}
else if(url == '/#contact'){
    res.end(contact);
}
else if(url == '/#footer'){
    res.end(footer);
}
else{
    res.statusCode=404;
    res.end("404 NOT FOUND");
}
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });