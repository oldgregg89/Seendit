import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
// import { v4 } from 'uuid';
import { Provider } from 'react-redux';
import reducer from './reducers/post-reducer';
import * as serviceWorker from './serviceWorker';

// const initialState = {
//   names: "Kyle",
//   content: "Look a Bird! https://static01.nyt.com/images/2020/04/03/science/03TB-KINGFISHER1/03TB-KINGFISHER1-mediumSquareAt3X.jpg",
//   upVote: 10,
//   downVote: 0,
//   id: v4()
// }
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
