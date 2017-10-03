import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, pinArticle, noPinning }) => (
  <div className='article-list' style={{height: '100%'}}>
    {
      articles.map(article => {
        const {
          id,
          webTitle,
          sectionName,
          webPublicationDate,
          fields: {thumbnail} = ''
        } = article;
        return (
          <Article
            key={id}
            link={id}
            title={webTitle}
            noPinning={noPinning}
            thumbnail={thumbnail}
            category={sectionName}
            published={webPublicationDate}
            pinArticle={() => pinArticle(article)}
          />
        );
      })
    }
  </div>
);

export default ArticleList;
