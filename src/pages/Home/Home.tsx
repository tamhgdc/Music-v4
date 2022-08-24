import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.scss";
import "../../components/Global/Responsive.scss";
import SlideBar from "../SlideBar";
import Content from "../Content";

const Home: React.FC = () => {
  return (
    <div className="main">
      <SlideBar />
      <Content />
    </div>
  );
};
export default Home;
