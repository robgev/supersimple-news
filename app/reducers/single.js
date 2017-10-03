import * as types from '../action-types';

export default (singleArticle = null, action) => {
	switch (action.type) {
		case types.FETCH_SINGLE_ARTICLE:
			return action.payload;
		default:
			return singleArticle;
	}
}
