import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  render() {
    return (
      
        this.state.blogs.map((blog, i) => {
          
        })
    );
  }
}

export default Blogs;
