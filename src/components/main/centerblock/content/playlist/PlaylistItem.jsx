import Icons from "../../../../../assets/img/icon/sprite.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export const PlaylistItem = (props) => {
  const [loading, setLoading] = useState(true);

  //выполняется при первом рендере
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="playlist__item">
      {loading ? (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Skeleton className="playlist__item" />
          {/* <Skeleton className="track__title-image" />
          <Skeleton className="track__title-link" />
          <Skeleton className="track__author-link" />
          <Skeleton className="track__album-link" />
          <Skeleton className="track__time-text" /> */}
        </SkeletonTheme>
      ) : (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={`${Icons}#icon-note`}></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.title}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={`${Icons}#icon-like`}></use>
            </svg>
            <span className="track__time-text">{props.time} </span>
          </div>
        </div>
      )}
    </div>
  );
};
