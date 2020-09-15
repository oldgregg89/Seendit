export default (state = {}, action) => {
  const { names, content, upVote, downVote, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        content: content,
        upVote: upVote,
        downVote: downVote,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

// CREATE_POST, SHOW_POST