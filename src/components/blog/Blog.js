import React, { Component } from 'react';
import { Navbar } from '../';

import './assets/blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
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
      },
      postOpened: false,
      postOpenedId: "none"
    }
    this.openPost = this.openPost.bind(this);
    this.closePost = this.closePost.bind(this);
  }

  openPost(id) {
    this.setState({
      postOpened: true,
      postOpenedId: id
    });
  }

  closePost() {
    this.setState({
      postOpened: false,
      postOpenedId: "none"
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="blogColumn">
          {/* <div>
            <button onClick={() => {this.closePost()}}><i class="arrow left" /> Go Back</button>
          </div> */}
          <ul>
            {Object.keys(this.state.posts).map((postId) => {
              let post = this.state.posts[postId];
              return (
                <li key={postId}>
                  <div className="blogPostTitle">
                    <h1>{post.title}</h1>
                    <h2>Posted on {post.date} in <span className="postCategory">{post.category}</span></h2>
                  </div>
                  <p>{post.description}</p>
                  <button
                    onClick={() => {this.openPost(postId)}}
                  >
                    Read More
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Blog;
