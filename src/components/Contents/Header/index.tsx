import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__first">
        <div className="header__first__search">
          <i className="fa-solid fa-grip-vertical"></i>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="search__input"
              type={"text"}
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="header__first__info">
          <img
            className="info__image"
            src={require("./103130337_999338717135285_1507870928285828698_n.jpg")}
          ></img>
          <div className="info__name">Đăng Quang</div>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>
      </div>
      <div className="header__two">
        <div className="header__two__notify">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="header__two__edit">
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
