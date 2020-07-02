import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const PostDetail = ({
  list,
  downloadListById,
  isLoading,
  match: {
    params: {
      id: postId
    }
  }
}) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const currentPost = list.find(({ id }) => id === parseInt(postId));
    if (currentPost) {
      setPost(currentPost);
      return;
    }
    downloadListById(postId);
  }, [downloadListById, list, postId]);

  return (
    <div>
      {isLoading && <p>Loading post....</p>}
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
