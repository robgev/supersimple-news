import * as types from '../action-types';

const url = 'http://content.guardianapis.com/search?show-fields=thumbnail&api-key=17cf0813-9269-4b81-9e49-812ff7f29480'

export const incrementPage = () => ({
  type: types.INCREMENT_PAGE,
})

export const fetchSingleArticle = id => async dispatch => {
  const base = 'http://content.guardianapis.com/';
  const queries = '?show-fields=thumbnail&api-key=17cf0813-9269-4b81-9e49-812ff7f29480';
  const promise = await fetch(`${base}${id}${queries}`);
  const { response: {content : payload} } = await promise.json(); // Just for fun :) will get a const payload
  dispatch({
    type: types.FETCH_SINGLE_ARTICLE,
    payload,
  })
}

export const fetchArticles = fetchPage => async (dispatch, getState) => {
  const { page } = getState();
  const promise = await fetch(`${url}&page=${fetchPage || page}`);
  const { response: {results : payload} } = await promise.json();
  dispatch({
    type: types.APPEND_NEW_ARTICLES,
    payload,
  })
};

export const pinArticle = article => ({
  type: types.PIN_ARTICLE,
  payload: article
})

export const refreshArticles = () => async dispatch => {
  const promise = await fetch(`${url}&page=1`);
  const { response: {results : payload} } = await promise.json();
  dispatch({
    type: types.REFRESH_ARTICLES,
    payload,
  })
}
