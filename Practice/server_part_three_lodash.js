// RETURNING HTML PAGES
// npm init
// npm install will install all dependencies listed in package.json
// node server_part_three_lodash.js INSTEAD OF nodemon server

const http = require('http');
const fs = require('fs');
const lo = require('lodash');

// the call back function runs everytime a request is made
const server = http.createServer((req, res) => {

    // lodash
    const num = lo.random(0, 20);
    console.log(num);

    const greet = lo.once(() => {
        console.log('hello');
    });

    greet();
    greet();

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