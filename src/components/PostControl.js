import React from "react";
import PostList from './PostList';

class PostControl extends React.Component {

  

}

handleDeletingPost = (key) => {
  const newMasterPostList = this.state.masterPostList.filter(post => post.key !== key);
  this.setState({
    masterPostList: newMasterPostList,
    selectedPost: null
  });
}
