import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function PostDetail(props) {
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

PostDetail.propTypes = {
  names: PropTypes.string,
  content: PropTypes.string,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  postDetail: PropTypes.object
}

export default PostDetail;