import { createStore } from 'redux';
let reducer = (state, action) => {
  if (action.type === 'login-sucess') {
    console.log('login content', action.content);
    return { ...state, username: action.content };
  }
  if (action.type === 'set-items') {
    console.log('set items content', action.content);
    return { ...state, items: action.content };
  }
  if (action.type === 'filter') {
    console.log('filter content', action.content);
    return { ...state, searchTag: action.content };
  }
  return state;
};
const store = createStore(
  reducer,
  { username: undefined, items: [], searchTag: ''},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
