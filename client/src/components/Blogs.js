import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
  <>
    <h2>{props.blog.title}</h2>
    <p>{props.blog.blog_post}</p>
    <span>{props.blog.author}</span>
    <button className="btn-primary"><Link to={`/edit/${props.blog._id}`}>Edit</Link></button>
  </>
)

export class Blogs extends Component {
  //using a constructor to initialize an empty blogs array
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  //retrieve blogs from database
  componentDidMount() {
    axios.get('/blogs')
    .then(res => {
      this.setState({
        blogs: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  blogList() {
    return this.state.blogs.map((blog, i) => {
      return <Blog blog={blog} key={i} />;
    })
  }
  render() {
    return (
     <div>
     <h1>Blog </h1>
     { this.blogList() }
     </div> 
    )
  }
};

export default Blogs;
