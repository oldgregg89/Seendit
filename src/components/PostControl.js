import React from "react";
import PostList from './PostList';
import { connect } from 'react-redux';
// add mapstatetoprop 

class PostControl extends React.Component {

constructor()props {}
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  

}

handleAddNewPost = (newPost) => {
  const { dispatch } = this.props;
  const { id, name, content, voteUp, voteDown } = newPost;
  const action = {
    type: 'ADD_POST',
    id: id,
    name: name,
    content: content,
    voteUp: voteUp,
    voteDown: voteDown
  }
  dispatch(action);
  this.setState({formVisibleOnPage: false});
}

handleEditingPost = (postToEdit) => {
  const { dispatch } = this.props;
  const { id, names, location, issue } = postToEdit;
  const action = {
    type: 'ADD_POST',
    id: id,
    name: name,
    content: content,
    voteUp: voteUp,
    voteDown: voteDown
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

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}
// const mapStateToProps = state => {
//   return {
//     masterPostList: state.masterPostList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;
