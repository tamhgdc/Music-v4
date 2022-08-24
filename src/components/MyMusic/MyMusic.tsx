import React from "react";
import "./MyMusic.scss";

const MyMusic: React.FC = () => {
  return (
    <div className="menubar__music">
      <div className="menubar__music__items">
        <span className="item__title">MY MUSIC</span>
        <div className="item__mymusic">
          <div className="item">
            <i className="fa-regular fa-clock"></i>
            <span className="music">Recently Played</span>
          </div>
          <div className="item">
            <i className="fa-regular fa-file"></i>
            <span className="music">Local Files</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyMusic;
