import React from "react";
import "./Playlist.scss";

const Playlist: React.FC = () => {
  return (
    <div className="playlist">
      <div className="playlist__items">
        <span className="playlist__title">PLAYLIST</span>
        <div className="items">
          <div className="item">
            <span className="itemm">Genaral playlist</span>
            <i className="fa-brands fa-napster"></i>
          </div>
          <div className="item">
            <span className="itemm">Easy up beats</span>
            <i className="fa-brands fa-napster"></i>
          </div>
          <div className="item">
            <span className="itemm">Pop songs</span>
            <i className="fa-brands fa-napster"></i>
          </div>
          <div className="item">
            <span className="itemm">Mood swings</span>
            <i className="fa-brands fa-napster"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
