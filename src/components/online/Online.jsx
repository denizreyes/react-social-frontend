import React from 'react'

import '../../assets/css/online.scss';

export default function Online({user}) {
  return (
    <li className="online-list-item">
      <div className="online-list-item-img_content">
        <img src={user.profilePicture} alt="" className="online-list-item-img" />
        <span className="online-list-item-online"></span>
      </div>
      <span className="online-list-item-username">{user.username}</span>
    </li>
  )
}
