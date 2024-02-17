// Compare this to the old code in server_part_one, two, & three. This is more elegant and easier to use with less code. 

const express = require('express');
const bodyParser = require('body-parser')

// express app
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

app.get('/person', (req, res) => {
    res.json({
       name: 'paddy'
    });
});

app.post('/person', jsonParser, (req, res) => {
    console.log(req.body.name)
    res.json({
       name: req.body.name
    });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404');
});

