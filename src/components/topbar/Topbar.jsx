import React from 'react'
import { 
  Person as PersonIcon, 
  Search as SearchIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import '../../assets/css/topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-logo">SocialApp</span>
      </div>
      <div className="topbar-center">
        <div className="topbar-search">
          <SearchIcon className="topbar-search-icon"/>
          <input type="text" placeholder="Buscar por amigo, post o video" className="topbar-search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-right-content">
          <div className="topbar-links">
            <div className="topbar-links-item">Inicio</div>
            <div className="topbar-links-item">Timeline</div>
          </div>
          <div className="topbar-icons">
            <div className="topbar-icons-item">
              <PersonIcon/>
              <span className="topbar-icons-badge">1</span>
            </div>
            <div className="topbar-icons-item">
              <ChatIcon/>
              <span className="topbar-icons-badge">3</span>
            </div>
            <div className="topbar-icons-item">
              <NotificationsIcon/>
              <span className="topbar-icons-badge">2</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbar-avatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
