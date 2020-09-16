import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
// masterPostList needs to be moved into redux store


function PostList(props) {
  // function handleUpVoting() {
  //   props.onVotingUp(post.score++)
  // }

  // function handleDownVoting() {
  //   props.onVotingDown(post.score--
  // }

  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post
          names={post.names}
          content={post.content}
          onSelect={props.onSelectPost}
          onUpVote={props.onUpVoting}
          score={post.score}
          // upVote={post.upVote}
          // downVote={post.downVote}
          id={post.id}
          key={post.id} />
      )}

    </React.Fragment>
  )

}
PostList.propTypes = {
  postList: PropTypes.object,
  score: PropTypes.number,
  // upVote: PropTypes.number,
  // downVote: PropTypes.number,
  onSelectPost: PropTypes.func
}

export default PostList;