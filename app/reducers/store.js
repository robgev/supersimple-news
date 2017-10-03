import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import page from './page';
import articles from './articles';
import singleArticle from './single';

const reducers = combineReducers({
  page,
  articles,
  singleArticle,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
