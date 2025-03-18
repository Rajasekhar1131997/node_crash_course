const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongodb
const dbURI = "Enter your mongodb connection string here";

mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// regsiter view engine
app.set('view engine', 'ejs');

// listen for requests


/* // middleware & static files
// if we don't use next() the request will be stuck
app.use((req, res, next) => {
    console.log('new request made');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
}); */

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
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
    Blog.findById('67d8bb642facf9f659da0eae')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/', (req, res) => {
    res.redirect('/blogs');
    /* const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index',{title: 'Home', blogs}); */
});

/* app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});  */

app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
});

app.get('/about-us', (req, res) => {
    res.render('about',{title: 'About'});
});

// blog routes
app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404'), {title: '404'};
});
/* 
app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    //res.sendFile('./views/404.html', { root: __dirname });
    res.status(404).sendFile('./views/404.html', { root: __dirname });
    //res.status(404).send('<p>404 page</p>');
}); */