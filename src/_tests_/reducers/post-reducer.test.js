import postReducer from '../../reducers/post-reducer';

describe('postReducer', () => {

  let action;
  const postData = {
    names: 'A bird',
    content: 'Distracts Kyle',
    upVote: '4',
    downVote: '3',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new mech data to PostList', () => {
    const { names, content, upVote, downVote, id } = postData;
    action = {
      type: 'ADD_POST',
      names: names,
      content: content,
      upVote: upVote,
      downVote: downVote,
      id: id
    };

    expect(PostListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        content: content,
        upVote: upVote,
        downVote: downVote,
        id: id
      }
    });
  });
});