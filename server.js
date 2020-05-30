const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = express.Router();
const PORT = 4000;
const mongoose = require('mongoose');

let Blog = require('./models/blogs.model');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bliss', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDb')
});

blogRoutes.route('/').get((req, res) => {
    Blog.find((err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            res.json(blogs);
        }
    });
});

blogRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Blog.findById(id, (err, blog) => {
        res.json(blog);
    });
});

blogRoutes.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (!blog)
            res.status(404).send('Not found');
        else
            blog.title = req.body.title;
            blog.blog_post = req.body.blog_post;
            blog.author = req.body.author;

            blog.save().then(blog => {
                res.json('Blog post updated!');
            })
            .catch(err => {
                res.status(400).send('Could not update blog post');
            });
    });
});

blogRoutes.route('/add').post((req, res) => {
    let blog = new Blog(req.body);
    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'Blog added successfully'})
        })
        .catch(err => {
            res.status(400).send('Blog not added');
        });
});

app.use('/blogs', blogRoutes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
