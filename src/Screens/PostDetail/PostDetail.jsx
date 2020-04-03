import React, { Component } from 'react';

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  }

  render() {
    return (
      <div>
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

export default PostDetail;
