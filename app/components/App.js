import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getAllArticles, getPage, getPinnedArticles } from '../data-selectors';
import { refreshArticles, fetchArticles, incrementPage, pinArticle } from '../actions';

import ArticleList from './ArticleList';
import '../scss/main.scss';

const mapStateToProps = state => ({
    page: getPage(state),
    articles: getAllArticles(state),
    pinnedArticles: getPinnedArticles(state),
});

const loading =
  <h1>
    Loading...
  </h1>

@connect(mapStateToProps, { fetchArticles, incrementPage, refreshArticles, pinArticle })
class App extends PureComponent {
  componentWillMount() {
    const { refreshArticles } = this.props;
    refreshArticles();
  }

  componentDidMount() {
		this.update = setInterval(this.props.refreshArticles, 30 * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.update);
	}

  handleInfiniteLoad = () => {
    const { fetchArticles, incrementPage } = this.props;
    incrementPage();
    fetchArticles();
  }

  render() {
    const { articles, refreshArticles, pinArticle, pinnedArticles } = this.props;
    return (
      <div className='app-container'>
        <div className='pinned-articles'>
          { !pinnedArticles.length ? 'Ooops! There are no pinned articles yet' :
            <ArticleList articles={pinnedArticles} noPinning />
          }
        </div>
        <InfiniteScroll
          pullDownToRefresh
          pullDownToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
          }
          refreshFunction={refreshArticles}
          next={this.handleInfiniteLoad}
          hasMore
          loader={loading}
        >
          <ArticleList articles={articles} pinArticle={pinArticle} />
        </InfiniteScroll>
      </div>
    );
  }
};

export default App
