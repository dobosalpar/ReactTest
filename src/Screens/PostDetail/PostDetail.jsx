import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  }

  selectPost(){
    const postId = this.props.match.params.id;
    if (this.state.post.id === parseInt(postId) || this.props.isLoading) {
      return;
    } 
    const {list, downloadPost } = this.props;
    const selectedPost = list.find(({ id }) => id === parseInt(postId));
    if (selectedPost) {
      this.setState({
        post: selectedPost,
      });
      return;
    }
    downloadPost(postId);
  } 
    
  componentDidMount() {
    this.selectPost();
  }

  componentDidUpdate() {
    this.selectPost();
  }
  
  render() {
    return (
      <div>
        {this.props.isLoading && <p>Loading post....</p>}
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

export default withRouter(PostDetail);
