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

// passing data into views by passing { title: 'Home' }
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet, consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet, consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet, consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

app.get('/person', (req, res) => {
    res.json({
       name: 'paddy'
    });
});

// post request
app.post('/person', jsonParser, (req, res) => {
    console.log(req.body.name)
    res.json({
       name: req.body.name
    });
});


