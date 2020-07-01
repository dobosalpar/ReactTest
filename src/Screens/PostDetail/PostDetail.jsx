import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  };

  setCurrentPost(){
    const postId = this.props.match.params.id;
    if (this.state.post.id === parseInt(postId) || this.props.isLoading) {
      return;
    }
    const { list, downloadElementById } = this.props;
    const currentPost = list.find(({id}) => id === parseInt(postId));
    if (currentPost) {
      this.setState({
        post: currentPost,
      });
     return;
    }
    downloadElementById(postId);
  }      
  componentDidMount() {
    this.setCurrentPost();
    }

  componentDidUpdate() {
    this.setCurrentPost();
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <p>Loading post...</p>}
        <h1>
          {this.state.post.title}
        </h1>
        <div>
          {this.state.post.body}
        </div>
      </div>
    );
  }
};

export default withRouter(PostDetail)
