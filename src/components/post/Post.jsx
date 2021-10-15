import React, {useState} from 'react'
import {
  MoreVert as MoreVertIcon
} from '@mui/icons-material';

import {Users} from '../../data';
import '../../assets/css/post.scss';

const Post = ({post}) => {
  const user= Users.filter(user => user.id === post.userId)[0];
  const [like, setLike]= useState(post.like);
  const [isLiked, setIsLiked]= useState(false);

  const handleLike= () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className="post-avatar" src={user.profilePicture} alt="" />
            <span className="post-username">{user.username}</span>
            <span className="post-date">{post?.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-image" src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="post-bottom-icon" src="/assets/like.png" alt="" onClick={handleLike} />
            <img className="post-bottom-icon" src="/assets/heart.png" alt="" onClick={handleLike} />
            <span className="post-bottom-like_counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment">{post.comment} comentarios</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
