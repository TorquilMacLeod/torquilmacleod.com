import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './assets/blog.css';

class Blog extends Component {
  render() {
    return (
      <div className='blogColumn'>
        <ul>
          <li>
            <div className="blogPostTitle">
              <h1>All You Need To Know About Software</h1>
              <h2>Posted on 12/05/2020 in <span className="postCategory">Software</span></h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis.</p>
            <Link>Read More</Link>
          </li>
          <li>
            <div className="blogPostTitle">
              <h1>Why Is Everyone Talking About Web Design</h1>
              <h2>Posted on 12/05/2020 in <span className="postCategory">Web Design</span></h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis.</p>
            <Link>Read More</Link>
          </li>
          <li>
            <div className="blogPostTitle">
              <h1>The Hidden Agenda Of Cloud</h1>
              <h2>Posted on 12/05/2020 in <span className="postCategory">Game Development</span></h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros ante. Duis porta porttitor lorem. In hac habitasse platea dictumst. Proin accumsan, ligula blandit luctus vestibulum, dui diam consequat lacus, quis aliquet nisi orci sit amet ante. Mauris et velit elementum risus pellentesque aliquet eu eu sem. Pellentesque porta erat ut volutpat iaculis.</p>
            <Link>Read More</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Blog;
