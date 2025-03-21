//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blogs');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index',{title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details',{blog: result, title: 'Blog Details'});
    })
    .catch((err) => {
        res.status(404).render('404',{title: 'Blog not found'});a
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/blogs'});
    })
    .catch(err => {
        console.log(err);
    });
}

const blog_create_get = (req, res) => {
 res.render('create',{title: 'Create a new blog'});
}
module.exports = {
    blog_index,
    blog_create_post,
    blog_details,
    blog_delete,
    blog_create_get
};