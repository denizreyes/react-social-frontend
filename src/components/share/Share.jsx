import React from 'react'
import {
  PermMedia as PermMediaIcon,
  Label as LabelIcon,
  Room as RoomIcon,
  EmojiEmotions as EmojiEmotionsIcon
} from '@mui/icons-material';
import '../../assets/css/share.scss';

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img className="image" src="/assets/person/1.jpeg" alt="" />
          <input className="input" type="text" placeholder="Que hay en tu mente?"/>
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-options-item">
              <PermMediaIcon className="icon" htmlColor="tomato"/>
              <span>Foto o Video</span>
            </div>
            <div className="share-options-item">
              <LabelIcon className="icon" htmlColor="blue"/>
              <span>Tag</span>
            </div>
            <div className="share-options-item">
              <RoomIcon className="icon" htmlColor="green"/>
              <span>Ubicación</span>
            </div>
            <div className="share-options-item">
              <EmojiEmotionsIcon className="icon" htmlColor="goldenrod"/>
              <span>Emociones</span>
            </div>
          </div>
          <button className="share-btn">Compartir</button>
        </div>
      </div>
    </div>
  )
}

export default Share
