// RETURNING HTML PAGES

const http = require('http');
const fs = require('fs');

// the call back function runs everytime a request is made
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // configuring paths for localhost
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
    // using a redirect if a URL changes
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;    
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an HTML file - uses two callback functions. err if there is one and data from the file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});