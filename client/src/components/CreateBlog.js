import React, { Component } from 'react';

export class CreateBlog extends Component {

    constructor(props) {
        super(props);

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
  render() {

    return (
      <div>
        
      </div>
    );
  }
}

export default CreateBlog;
