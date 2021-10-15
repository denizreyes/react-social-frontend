import React from 'react'

import Share from '../share/Share';
import '../../assets/css/feed.scss';
import Post from '../post/Post';
import {Posts} from '../../data';
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share/>
        {
          Posts.map(post => (
            <Post key={post.id} post={post}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feed
