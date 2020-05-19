import React from 'react';
import {
  Link
} from 'react-router-dom';

const PostList = (props) => {
  return (
    <div>
      <ul>
        {Object.keys(props.posts).map((postId) => {
          let post = props.posts[postId];
          return (
            <li key={postId}>
              <div className="blogPostTitle">
                <h1>{post.title}</h1>
                <h2>Posted on {post.date} in <span className="postCategory">{post.category}</span></h2>
              </div>
              <p>{post.description}</p>
              <Link className="readMoreLink" to={`/blog/${postId}`}>Read More</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList;
