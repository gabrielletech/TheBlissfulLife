const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blog = new Schema({
    title: {
        type: String
    },

    blog_post: {
        type: String
    },

    author: {
        type: String
    }
});

module.exports = mongoose.model('Blog', Blog);