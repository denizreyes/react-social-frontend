import React from 'react'

import {Users} from '../../data';
import '../../assets/css/rightbar.scss';
import Online from '../online/Online';

const Rightbar = ({profile}) => {
  const Home= () => {
    return (
      <>
        <div className="birthday">
          <img className="birthday-img" src="/assets/gift.png" alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src="/assets/ad.png" alt="" />
        <div className="online">
          <h4 className="online-title">Amigos conectados</h4>
          <ul className="online-list">
            {
              Users.map(user => (
                <Online key={user.id} user={user}/>
              ))
            }
          </ul>
        </div>
      </>
    )
  };

  const Profile= () => {
    return (
      <>
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-item-key">City</span>
            <span className="rightbar-info-item-value">New York</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-item-key">From</span>
            <span className="rightbar-info-item-value">Madrid</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-item-key">Relationship</span>
            <span className="rightbar-info-item-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-followings-item">
            <img src="/assets/person/1.jpeg" alt="" />
            <div>John Carter</div>
          </div>
          <div className="rightbar-followings-item">
            <img src="/assets/person/2.jpeg" alt="" />
            <div>John Carter</div>
          </div>
          <div className="rightbar-followings-item">
            <img src="/assets/person/3.jpeg" alt="" />
            <div>John Carter</div>
          </div>
          <div className="rightbar-followings-item">
            <img src="/assets/person/4.jpeg" alt="" />
            <div>John Carter</div>
          </div>
          <div className="rightbar-followings-item">
            <img src="/assets/person/5.jpeg" alt="" />
            <div>John Carter</div>
          </div>
          <div className="rightbar-followings-item">
            <img src="/assets/person/6.jpeg" alt="" />
            <div>John Carter</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {
          profile ? <Profile/> : <Home/>
        }
      </div>
    </div>
  )
}

export default Rightbar
