import React from 'react'

const SidebarFriend = ({user}) => {
  return (
    <li className="sidebar-friend-item">
      <img src={user.profilePicture} alt="" className="image" />
      <span className="name">{user.username}</span>
    </li>
  )
}

export default SidebarFriend
