import React from 'react';
import {
  useParams
} from "react-router-dom";
import { Navbar } from '../';

const BlogPost = () => {
  let { slug } = useParams();
  return (
    <div>
      <Navbar />
      Post Id opened: {slug}
    </div>
  )
}

export default BlogPost;
