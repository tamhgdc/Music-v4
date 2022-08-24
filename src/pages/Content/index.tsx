import React from "react";
import "./Content.scss";
import Header from "../../components/Contents/Header";
import Artists from "../../components/Contents/Artists";
import Player from "../../components/Contents/Player";

const Content: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <Artists />
      <Player />
    </div>
  );
};

export default Content;
