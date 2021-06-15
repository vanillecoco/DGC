const http= require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>test page</h1>' + Math.random());
});

server.listen(3000);