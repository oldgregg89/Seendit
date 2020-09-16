import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.onSelect(props.id)}>
        <h3>Post Name: {props.names}</h3>
        <h3>Content: {props.content}</h3>
        <h3>Score: {props.score}</h3>
        {/* <h3>Vote Up: {props.upVote}</h3> vote up and down are vote tallies */}
        {/* <h3>Vote Down: {props.downVote}</h3> */}
      </div>
      <button onClick={() => props.onUpVote(props.id)}>Upvote</button>
      <button onClick={() => props.onDownVote(props.id)}>Downvote</button>
      {/* <button onClick={handleDownVoting}>Downvote</button> */}
    </React.Fragment >
  )
}

Post.propTypes = {
  names: PropTypes.string,
  content: PropTypes.string,
  score: PropTypes.number,
  // upVote: PropTypes.number,
  // downVote: PropTypes.number,
  tallyUp: PropTypes.func, // function: adds a tally to a vote count and then runs a check to decide the publish order on feed
  tallyDown: PropTypes.func
}

export default Post;