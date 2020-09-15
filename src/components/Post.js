import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>Post Name: {props.names}</h3>
      <h3>Content: {props.content}</h3>
      <h3>Vote Up: {props.upVote}</h3> {/* vote up and down are vote tallies */}
      <h3>Vote Down: {props.downVote}</h3>
      <hr />
    </React.Fragment>
  )
}

Post.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  upVote: PropTypes.number,
  downVote: PropTypes.number,
  tallyUp: PropTypes.func, // function: adds a tally to a vote count and then runs a check to decide the publish order on feed
  tallyDown: PropTypes.func
}

export default Post;