import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBlogPost = this.onChangeBlogPost.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            blog_post: '',
            author: '',
        }

    };

    //methods to update state properties
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeBlogPost(e) {
      this.setState({
        blog_post: e.target.value
      });
    }

    onChangeAuthor(e) {
      this.setState({
        author: e.target.value
      })
    }

    //method to handle onSubmit event
    onSubmit(e) {
      e.preventDefault();

      console.log(`Form submitted`);
      console.log(`Title: ${this.state.title}`);
      console.log(`Blog Post: ${this.state.blog_post}`);
      console.log(`Author: ${this.state.author }`);

      const newBlog = {
        title: this.state.title,
        blog_post: this.state.blog_post,
        author: this.state.author
      };

      axios.post('/blogs/add', newBlog)
        .then(res => console.log(res.data));

      this.setState({
        title: '',
        blog_post: '',
        author: ''
      })
    }
  render() {

    return (
      <div>
      <Form onSubmit={this.onSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input 
              type="text" 
              name="title" 
              id="title" 
              value={this.state.title}
              onChange={this.onChangeTitle}
              placeholder="title" 
        />
      </FormGroup>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input 
              type="text" 
              name="author" 
              id="author" 
              value={this.state.author}
              onChange={this.onChangeAuthor}
              placeholder="author" />
      </FormGroup>
      <FormGroup>
        <Label for="blog">Blog Post</Label>
        <Input 
              type="textarea" 
              name="text" 
              value={this.state.blog_post}
              onChange={this.onChangeBlogPost}
              id="blog" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
      </div>
    );
  }
}

export default CreateBlog;
