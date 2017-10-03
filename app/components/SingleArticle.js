import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSingleArticle } from '../data-selectors';
import { fetchSignleArticle, pinArticle } from '../actions';

const mapStateToProps = state => ({
  article: getSingleArticle(state),
});

@connect(mapStateToProps, { fetchSignleArticle, pinArticle })
class SingleArticle extends PureComponent {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }

  async componentWillMount() {
    const { fetchSignleArticle, location: {pathname} } = this.props; // Pathname is /artilcle/ID. We need ID
    const articleID = pathname.split('/article')[1]; // We split by /article and get array of ["", ID]
    await fetchSignleArticle(articleID);
    this.setState({ loading: false });
  }

  pinArticle = () => {
    const { pinArticle, article } = this.props;
    pinArticle(article);
  }

  render() {
    if(this.state.loading) {
      return <div>Loading</div>
    } else {
      const { article } = this.props;
      const { sectionName, fields: {thumbnail}, webTitle, webPublicationDate } = article;
      return (
          <div className='article-container'>
            <button>
              <Link to='/'>
                Back
              </Link>
            </button>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3>{webTitle}</h3>
              <button onClick={this.pinArticle}>Pin it!</button>
            </div>
            <img src={thumbnail} />
            <p>Category: {sectionName}, published: {webPublicationDate}</p>
          </div>
      );
    }
  }
};

export default SingleArticle
