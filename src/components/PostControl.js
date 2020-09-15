import React from "react";
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import PostEdit from './PostEdit';
import NewPostForm from './NewPostForm';
// add mapstatetoprop 

class PostControl extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  
  }

  handleAddNewPost = (newPost) => {
    const { dispatch } = this.props;
    const { id, names, content, voteUp, voteDown } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      VoteUp: voteUp,
      VoteDown: voteDown
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, names, content, voteUp, voteDown } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      VoteUp: voteUp,
      VoteDown: voteDown
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
      const action = {
        type: 'DELETE_POST',
        id: id
      }
      dispatch(action);
      this.setState({selectedPost: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <PostEdit post = {this.state.selectedTicket} onEditTicket = 
      {this.handleEditingPost} />
      buttonText = "Return to Posts";
    } 
    return (
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>

    );   
  }

}

  
  
  PostControl.propTypes = {
    masterPostList: PropTypes.object
  };
  
  const mapStateToProps = state => {
    return {
      masterPostList: state
    }
  }


PostControl = connect(mapStateToProps)(PostControl);


export default PostControl;
