export default (state = {}, action) => {
  const { names, content, score, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          content: content,
          score: score,
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