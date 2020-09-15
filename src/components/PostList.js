import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const masterPostList = [
  {
    name: "Ninja Sh%t",
    content: "look at this crap",
    key: v4()
  },
  {
    name: "Big Cheeto man do bad thing",
    price: "Blahblahblah",
    key: v4()
  },
  {
    name: "Luxemburg",
    price: "picture of a place",
    key: v4()
  }
]



function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {masterPostList.map((post) =>
        <Product name={post.name}
          content={post.content}
          key={post.key}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  upVote: PropTypes.func,
  downVote: PropTypes.func
}

export default PostList;