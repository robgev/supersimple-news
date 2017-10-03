import * as types from '../action-types';

export default (page = 0, action) => {
	switch (action.type) {
		case types.INCREMENT_PAGE:
			return ++page;
		default:
			return page;
	}
}
