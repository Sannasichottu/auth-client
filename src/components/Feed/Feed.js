import React from 'react';
import './feed.css'
import Avatar from '../Avatar/Avatar';

const Feed = () => {
  return (
    <div className='feed'>
      { /* date */}
        <div className="feed_date">
            <Avatar />
            <p>1/21/2007</p>
        </div>
      { /* img */}
      <div className="feed_img">
        <img src="https://source.unsplash.com/random" alt="feed_image" />
      </div>

      { /* content */}
      <div className="feed_content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus repudiandae officiis minus libero deleniti amet iusto corporis similique magni aliquid labore expedita voluptas, quod ratione.</p>
      </div>
    </div>
  )
}

export default Feed
