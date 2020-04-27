import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

function PostDetail (props) {
  const [post, setPost] = useState({})
  
  useEffect(() => {
    const postId = props.match.params.id;
    if (post.id === parseInt(postId) || props.isLoading) {
      return;
    }
    const { list, downloadListById } = props;
    const currentPost = list.find(({ id }) => id === parseInt(postId));
    if (currentPost) {
      setPost(currentPost)
      return;
    }
    downloadListById(postId);
  }, [setPost, post.id, props])

  return (
    <div>
      {props.isLoading && <p>Loading post....</p>}
      <h1>
        {post.title}
      </h1>
      <div>
        {post.body}
      </div>
    </div>
  );
};

export default withRouter(PostDetail);
