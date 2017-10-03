export const getState = state => state;
export const getArticles = state => state.articles;
export const getAllArticles = state => getArticles(state).allArticles;
export const getPinnedArticles = state => getArticles(state).pinnedArticles;
export const getPage = state => state.page;
export const getSingleArticle = state => state.singleArticle
