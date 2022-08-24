import React from "react";
import "./SlideBar.scss";
import MenuBar from "../../components/Menubar/Menubar";
import Playlist from "../../components/Playlist/Playlist";
import MyMusic from "../../components/MyMusic/MyMusic";

const SlideBar: React.FC = () => {
  return (
    <div className="slidebar">
      <div className="slidebar__menubar">
        <MenuBar />
      </div>
      <div className="slidebar__mymusic">
        <MyMusic />
      </div>
      <div className="slidebar__playlist">
        <Playlist />
      </div>
    </div>
  );
};

export default SlideBar;
