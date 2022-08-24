import React, { useEffect, useState } from "react";
import { getDetailPlaylist, getSong } from "../../../api/data";
import "./Player.scss";
import { useAppSelector } from "../../../store/store";
import { albumID } from "../../../store/albumSlice";
import { useAppDispatch } from "../../../store/store";
import { addplayer } from "../../../store/player";
import { isFulfilled } from "@reduxjs/toolkit";

const Player: React.FC = () => {
  interface dataSong {
    encodeId: string;
    title: string;
    thumbnailM: string;
    artistsNames: string;
    duration: number;
  }

  const [isPlaying, setisPlaying] = useState(true);
  const dispatch = useAppDispatch();

  const albumID = useAppSelector((state) => state.album.albumID);
  const playersong = useAppSelector((state) => state.player.playerinfo);

  const [dataSong, setdataSong] = useState<dataSong[]>([]);
  const [songID, setsongID] = useState<string>("");
  const [infoSong, setinfoSong] = useState("");

  //Lấy 100 bài hát theo AlbumID
  useEffect(() => {
    (async () => {
      const getdata = await getDetailPlaylist(albumID);
      setdataSong(getdata.song.items);
    })();
  }, [albumID]);

  //Click vào bài hát => info bài hát đó
  const handleclick = (
    songid: string,
    imagesong: string,
    namesong: string,
    subnamesong: string,
    nextsong: number
  ) => {
    if (-1 < nextsong && nextsong < 101) {
      dispatch(
        addplayer({
          songid: songid,
          imagesong: imagesong,
          namesong: namesong,
          subnamesong: subnamesong,
          nextsong: nextsong,
        })
      );
      setsongID(songid);
    }
  };

  //Lấy audio theo song id
  useEffect(() => {
    if (songID) {
      (async () => {
        const getInfoSong = await getSong(songID);
        setinfoSong(getInfoSong[128]);
      })();
    }
  }, [songID]);

  useEffect(() => {
    if (infoSong) {
      const audio = document.getElementById("audio") as HTMLAudioElement;
      audio.src = infoSong;
      audio.play();
      setisPlaying(false);
    }
  }, [infoSong]);

  const audio = document.getElementById("audio") as HTMLAudioElement;

  //Thanh chạy theo nhạc và tua nhạc
  const progress = document.getElementById("progress") as HTMLInputElement;
  useEffect(() => {
    audio?.addEventListener("timeupdate", () => {
      const subline = Math.floor((audio.currentTime / audio.duration) * 100);
      progress.value = subline.toString();
    });
    progress?.addEventListener("mousedown", () => {
      progress.oninput = () => {
        const number = Number(progress.value);
        const seeTime = (audio.duration / 100) * number;
        audio.currentTime = seeTime;
      };
    });
  }, [songID]);

  //Play pause nhạc
  if (isPlaying && infoSong) {
    audio.pause();
  } else if (!isPlaying && infoSong) {
    audio.play();
  }

  //Lazy loading => scroll để lấy thêm 4 bài hát (tránh tải toàn bộ playtist quá tải server)
  const [totalSong, settotalSong] = useState(10);
  function getNextSong() {
    const element = document.getElementById("playtists__items");
    if (element!.scrollTop == element!.scrollHeight - element!.offsetHeight) {
      settotalSong((pre) => pre + 4);
    }
  }

  return (
    <div className="player">
      <div className="player__music">
        <div className="player__music__title">Now Playing</div>
        <div className="player__music__media">
          <div className="main__song">
            <div className="next__song">
              <span className="name__next__song">
                Next -
                <strong>{dataSong[playersong.nextsong + 1]?.title}</strong>
              </span>
            </div>
            <div className="image__song">
              <img
                className="image"
                src={
                  playersong.imagesong == ""
                    ? require("./IMG_1674.png")
                    : playersong.imagesong
                }
              ></img>
            </div>
            <div className="info__song">
              <span className="name__song">{playersong.namesong}</span>
              <span className="subsong">{playersong.subnamesong}</span>
            </div>
            <div className="progress">
              <input
                id="progress"
                className="range blue"
                type="range"
                defaultValue="0"
                step="1"
                min="0"
                max="100"
              ></input>
              <audio id="audio" src=""></audio>
            </div>
            <div className="control">
              <i className="fa-solid fa-repeat"></i>
              <i
                className="fa-solid fa-backward"
                onClick={
                  playersong.nextsong > 0
                    ? () =>
                        handleclick(
                          dataSong[playersong.nextsong - 1].encodeId,
                          dataSong[playersong.nextsong - 1].thumbnailM,
                          dataSong[playersong.nextsong - 1].title,
                          dataSong[playersong.nextsong - 1].artistsNames,
                          playersong.nextsong - 1
                        )
                    : () => {}
                }
              ></i>
              <div className="play">
                <div className="play1">
                  {isPlaying ? (
                    <i
                      className="fa-solid fa-play"
                      onClick={() => setisPlaying(false)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-pause"
                      onClick={() => setisPlaying(true)}
                    ></i>
                  )}
                </div>
              </div>
              <i
                className="fa-solid fa-forward"
                onClick={
                  playersong.nextsong + 1 < 100
                    ? () =>
                        handleclick(
                          dataSong[playersong.nextsong + 1].encodeId,
                          dataSong[playersong.nextsong + 1].thumbnailM,
                          dataSong[playersong.nextsong + 1].title,
                          dataSong[playersong.nextsong + 1].artistsNames,
                          playersong.nextsong + 1
                        )
                    : () => {}
                }
              ></i>
              <div className="heart">
                <i className="fa-solid fa-heart"></i>
                {/* <i className="fa-solid fa-heart-circle-check"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player__playlists">
        <div className="playtists__title">
          <div className="title">
            Mostly Played
            <img
              className="heart"
              src={require("./hearts-heart-love-228820.png")}
            ></img>
          </div>
          <div className="total__song">
            100 song on the list
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div
          id="playtists__items"
          className="playtists__items"
          onScroll={() => getNextSong()}
        >
          {dataSong.slice(0, totalSong).map((item, index) => {
            return (
              <div
                key={index}
                className={`item ${
                  playersong.namesong == item.title ? "active" : ""
                }`}
                onClick={() =>
                  handleclick(
                    item.encodeId,
                    item.thumbnailM,
                    item.title,
                    item.artistsNames,
                    index
                  )
                }
              >
                <div className="item__info">
                  <div className="item__info__stt">{index + 1}</div>
                  <div className="item__info__image">
                    <img src={item.thumbnailM} alt="" className="image" />
                  </div>
                  <i className="fa-solid fa-caret-right"></i>
                  <div className="item__info__name">{item.title}</div>
                </div>
                <div className="item__subinfo">
                  <div className="item__subinfo__subname">
                    {item.artistsNames}
                  </div>
                  <div className="item__subinfo__time">
                    {Math.floor(item.duration / 60)}:
                    {item.duration % 60 > 9
                      ? item.duration % 60
                      : `0${item.duration % 60}`}
                  </div>
                  <i className="fa-solid fa-music"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Player;
