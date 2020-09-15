export default (state = {}, action) => {
  const { names, content, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        content: content,
        id: id
      }
    });
  default:
    return state;
  }
};