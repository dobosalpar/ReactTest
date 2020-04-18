import React, { Component } from 'react';

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
    this.downloadPost = this.downloadPost.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        post: this.props.location.state.post,
      })
    } else {
      this.downloadPost(this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1))
    }
  }

  downloadPost(id) {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  			.then(response => response.json())
			.then(json => {
				this.setState({
					post: json
				})
			});
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
