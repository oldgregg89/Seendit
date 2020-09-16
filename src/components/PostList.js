import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
// masterPostList needs to be moved into redux store


function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post
          names={post.names}
          content={post.content}
          onSelect={props.onSelectPost}
          upVote={post.upVote}
          downVote={post.downVote}
          id={post.id}
          key={post.id} />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  onSelectPost: PropTypes.func
}

export default PostList;