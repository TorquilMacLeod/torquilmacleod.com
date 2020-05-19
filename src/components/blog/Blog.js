import React, { useState, useEffect } from 'react';
import { Navbar } from '../';
import PostList from './PostList';

import './assets/blog.css';

const initialPosts = {
  "1": {
    title: "All You Need To Know About Software",
    date: "12/05/2020",
    category: "Software",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis."
  },
  "2": {
    title: "Why Is Everyone Talking About Web Design",
    date: "12/05/2020",
    category: "Game Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis."
  },
  "3": {
    title: "The Hidden Agenda Of Cloud",
    date: "12/05/2020",
    category: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis."
  }
}

const Blog = () => {

  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="blogColumn">
        <PostList
          posts={posts}
        />
      </div>
    </div>
  )
}

export default Blog;
