// Compare this to the old code in server_part_one, two, & three. This is more elegant and easier to use with less code. 

const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('./about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});