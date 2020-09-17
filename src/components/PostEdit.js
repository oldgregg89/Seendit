import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function PostEdit(props) {
  // const { post } = props;
  function handlePostEditSubmission(event) {
    event.preventDefault();
    props.onEditPost({ names: event.target.names.value, content: event.target.content.value, id: event.target.id.value });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handlePostEditSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

PostEdit.propTypes = {
  onEditPost: PropTypes.func
};

export default PostEdit;
