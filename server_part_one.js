const http = require('http');

// the call back function runs everytime a request is made
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<p>Hello world!!!</p>');
    res.write('<p>Hello again :)</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});