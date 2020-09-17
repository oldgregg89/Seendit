import React from "react";
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import PostEdit from './PostEdit';
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    }
    else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSelectingPost = (id) => {
    console.log(id);
    const newSelectPost = this.props.masterPostList[id]
    console.log(newSelectPost)
    this.setState({
      selectedPost: newSelectPost
    })
  }

  handleAddNewPost = (newPost) => {
    const { dispatch } = this.props;
    const { id, names, content, score } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      score: score
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    });
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, names, content, score } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      score: score
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
    this.setState({ selectedPost: null });
  }

  handleVotingUp = (postId) => {
    const { dispatch } = this.props;
    const { id, names, score, content } = this.props.masterPostList[postId]
    const newScore = score + 1;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      score: newScore
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleVotingDown = (postId) => {
    const { dispatch } = this.props;
    const { id, names, score, content } = this.props.masterPostList[postId]
    const newScore = score - 1;
    const action = {
      type: 'ADD_POST',
      id: id,
      names: names,
      content: content,
      score: newScore
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.selectedPost != null) {
      currentlyVisibleState = <PostDetail postDetail={this.selectedPost} />
    } else if (this.state.editing) {
      currentlyVisibleState = <PostEdit post={this.state.selectedTicket} onEditTicket=
        {this.handleEditingPost} />
      buttonText = "Return to Posts";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddNewPost} />
      buttonText = "Return to Post List"
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onSelectPost={this.handleSelectingPost} onUpVoting={this.handleVotingUp} onDownVoting={this.handleVotingDown} />
      buttonText = "Add Post"
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
