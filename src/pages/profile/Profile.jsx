import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';

import '../../assets/css/profile.scss';

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className="profile-cover-image" src="/assets/post/3.jpeg" alt="" />
              <img className="profile-cover-avatar" src="/assets/person/7.jpeg" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Safak Kocaglu</h4>
              <span className="profile-info-desc">Hello my friends :)</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
