import { combineReducers } from 'redux';
import { differenceBy } from 'lodash';

import * as types from '../action-types';

const refreshArticles = (oldList, newList) => {
  // Can also write an imperative and explicit algo doing this
  const newArticles = differenceBy(newList, oldList, 'id');
  return [ ...newArticles, ...oldList ];
}

const safeAddArticles = (oldList, newList) => {
  const appendedArticles = differenceBy(newList, oldList, 'id');
  return [ ...oldList, ...appendedArticles ];
}

const pinArticle = (articles, pinnedArticle) => {
  const search = articles.find(article => JSON.stringify(article) === JSON.stringify(pinnedArticle));
  if(!search) {
    return [pinnedArticle, ...articles];
  }
  return articles;
}

const allArticles = (articles = [], action) => {
	switch (action.type) {
		case types.APPEND_NEW_ARTICLES:
			return safeAddArticles(articles, action.payload);
    case types.REFRESH_ARTICLES:
      return refreshArticles(articles, action.payload);
		default:
			return articles;
	}
}

const pinnedArticles = (articles = [], action) => {
  switch (action.type) {
    case types.PIN_ARTICLE:
      return pinArticle(articles, action.payload);
    default:
      return articles;
  }
}

export default combineReducers({ allArticles, pinnedArticles })
