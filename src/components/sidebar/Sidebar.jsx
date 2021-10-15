import React from 'react'
import { 
  Bookmark as BookmarkIcon,
  Feed as FeedIcon,
  HelpOutline as HelpOutlineIcon,
  WorkOutline as WorkOutlineIcon,
  Event as EventIcon,
  School as SchoolIcon
} from '@mui/icons-material';

import '../../assets/css/sidebar.scss';

import {Users} from '../../data';
import SidebarFriend from '../siderbarFriend/SidebarFriend';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <FeedIcon className="icon"/>
            <span>Temas</span>
          </li>
          <li className="sidebar-list-item">
            <BookmarkIcon className="icon"/>
            <span>Marcadores</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutlineIcon className="icon"/>
            <span>Preguntas</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutlineIcon className="icon"/>
            <span>Trabajos</span>
          </li>
          <li className="sidebar-list-item">
            <EventIcon className="icon"/>
            <span>Eventos</span>
          </li>
          <li className="sidebar-list-item">
            <SchoolIcon className="icon"/>
            <span>Cursos</span>
          </li>
        </ul>
        <button className="sidebar-btn">Ver más</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend">
          {
            Users.map(user => (
              <SidebarFriend key={user.id} user={user}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
