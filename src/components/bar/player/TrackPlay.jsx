import Icons from "../../../assets/img/icon/sprite.svg";
import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export const TrackPlay = () => {
  const [loading, setLoading] = useState(true);

  //выполняется при первом рендере
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          {loading ? (
            <Skeleton style={{ width: "51", height: "51" }} />
          ) : (
            <svg className="track-play__svg" alt="music">
              <use xlinkHref={`${Icons}#icon-note`} />
            </svg>
          )}
        </div>
        <div className="track-play__author">
          {loading ? (
            <Skeleton style={{ width: "49", height: "15" }} />
          ) : (
            <a className="track-play__author-link" href="http://">
              Ты та...
            </a>
          )}
        </div>
        <div className="track-play__album">
          {loading ? (
            <Skeleton style={{ width: "49", height: "15" }} />
          ) : (
            <a className="track-play__album-link" href="http://">
              Баста
            </a>
          )}
        </div>
      </div>
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref={`${Icons}#icon-like`}></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref={`${Icons}#icon-dislike`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};
