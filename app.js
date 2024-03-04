// Compare this to the old code in server_part_one, two, & three. This is more elegant and easier to use with less code. 

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://trevkat:Starcraft1!@nodetest.o2fqkai.mongodb.net/nodetest?retryWrites=true&w=majority&appName=nodetest';
mongoose.connect(dbURI) // (dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// create application/json parser
var jsonParser = bodyParser.json();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
// app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more info about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('65e5de1702044d0d5d5e6ae3')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

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

