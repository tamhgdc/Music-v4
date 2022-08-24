import React, { useState, useEffect } from "react";
import { getTop100 } from "../../../api/data";
import "./Artist.scss";
import { albumID } from "../../../store/albumSlice";
import { useAppDispatch } from "../../../store/store";

const Artists: React.FC = () => {
  interface dataArtists {
    encodeId: string;
    title: string;
    thumbnailM: string;
  }

  const [dataArtists, setdataArtists] = useState([]);

  useEffect(() => {
    (async () => {
      const detailPlaylist = await getTop100();
      setdataArtists(detailPlaylist[0].items);
    })();
  }, []);

  const upcrollbar = () => {
    var container = document.getElementById("artists__items");
    sideScroll(container, "right", 20, 200, 20);
  };

  const downcrollbar = () => {
    var container = document.getElementById("artists__items");
    sideScroll(container, "left", 20, 200, 20);
  };

  function sideScroll(
    element: any,
    direction: any,
    speed: any,
    distance: any,
    step: any
  ) {
    var scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  const dispatch = useAppDispatch();
  const [albumID1, setalbumID] = useState("ZWZB969E");
  const handleClick = (id: string) => {
    setalbumID(id);
  };
  useEffect(() => {
    dispatch(albumID(albumID1));
  }, [albumID1]);
  return (
    <div className="artists">
      <div className="artists__header">
        <div className="artists__header__title">
          <div className="title">Top Artists</div>
          <div className="subtitle">- Top 100</div>
        </div>
        <div className="arrow">
          <i className="fa-solid fa-chevron-left" onClick={downcrollbar}></i>
          <i
            className="fa-solid fa-chevron-right btn-right"
            onClick={upcrollbar}
          ></i>
        </div>
      </div>
      <div id="artists__items" className="artists__items">
        {dataArtists.map((item: dataArtists, index) => {
          return (
            <div key={index} className="item">
              <img
                className="item__image"
                src={item.thumbnailM}
                onClick={() => handleClick(item.encodeId)}
              ></img>
              <div
                className="item__title"
                onClick={() => handleClick(item.encodeId)}
              >
                {item.title}
              </div>
              {/* <div className="item__subtitle">Tokuda</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artists;
