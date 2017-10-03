import React from 'react';

import '../scss/notfound.scss';

export default ({ user }) => {
  return (
    <div className='container'>
        <img src='/images/missing.png' className='image' />
        <div className='banner' >
          <h2 className='banner-header'>Woopsie Daisy!</h2>
          <p className='banner-text'>
            Looks like something went completely wrong! <br />
            Everyone sometimes makes mistakes, don't worry.
          </p>
          <br />
          <p className='banner-text'>
            Error code: 404
          </p>
        </div>
    </div>
  );
};
