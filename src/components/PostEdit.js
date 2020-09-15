import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function PostEdit(props){
  const {post} = props;
  function handlePostEditSubmission(event){
    event.preventDefault();
    props.onEditPost({names: event.target.names.value, content: event.target.content.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

PostEdit.propTypes = {
  onEditPost: PropTypes.func
};

export default PostEdit;
