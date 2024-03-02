// Compare this to the old code in server_part_one, two, & three. This is more elegant and easier to use with less code. 

const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')

// express app
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.use(morgan('dev'));

// next function allows the code to proceed here. Page will hang and fail to load without next
// commenting out due to using Morgan NPM package which does this better
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// also commenting out this due to using Morgan NPM package which does this better
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

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

// 404 page - has to be at the bottom since requests run from top to bottom 
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

