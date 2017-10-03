import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ link, title, thumbnail, category, published, pinArticle, noPinning }) => (
  <div className='article-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to={`article/${link}`}>
          <h3>{title}</h3>
        </Link>
        { !noPinning && <button onClick={pinArticle}>Pin it!</button> }
      </div>
      <img src={thumbnail} />
      <p>Category: {category}, published: {published}</p>
  </div>
);

export default Article
