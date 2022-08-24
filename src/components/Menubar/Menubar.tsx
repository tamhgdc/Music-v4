import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.scss";

const MenuBar: React.FC = () => {
  return (
    <div className="menubar__listitems">
      <div className="menubar__item">
        <Link className="Link__menu active" to={"/home"}>
          <i className="fa-solid fa-house-chimney"></i>
          <span className="item">Home</span>
        </Link>
      </div>
      <div className="menubar__item">
        <Link className="Link__menu" to={"/browse"}>
          <i className="fa-solid fa-chart-simple"></i>
          <span className="item">Browse</span>
        </Link>
      </div>
      <div className="menubar__item">
        <Link className="Link__menu" to={"/albums"}>
          <i className="fa-solid fa-compact-disc"></i>
          <span className="item">Albums</span>
        </Link>
      </div>
      <div className="menubar__item">
        <Link className="Link__menu" to={"/artists"}>
          <i className="fa-solid fa-headphones"></i>
          <span className="item">Artists</span>
        </Link>
      </div>
      <div className="menubar__item">
        <Link className="Link__menu" to={"/videos"}>
          <i className="fa-solid fa-video"></i>
          <span className="item">Videos</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
