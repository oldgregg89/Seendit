import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>Post Name: {props.name}</h3>
      <h3>Content: {props.content}</h3>
      <h3>Vote up: {props.voteUp}</h3>
      <h3>Vote down: {props.voteDown}</h3>
      <hr />
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func
}

export default Product;