import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>Post Name: {props.name}</h3>
      <h3>Content: {props.content}</h3>
      <h3>Vote Up: {props.voteUp}</h3> {/* vote up and down are vote tallies */}
      <h3>Vote Down: {props.voteDown}</h3>
      <hr />
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  voteUp: PropTypes.func, // function: adds a tally to a vote count and then runs a check to decide the publish order on feed
  voteDown: PropTypes.func
}

export default Product;