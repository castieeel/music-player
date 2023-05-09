import Icons from "../../../assets/img/icon/sprite.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
      {loading ? (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Skeleton className="track-play__image" />
          <Skeleton className="track-play__author" />
          <Skeleton className="track-play__album" />
        </SkeletonTheme>
      ) : (
        <>
          <div className="track-play__contain">
            <div className="track-play__image">
              <svg className="track-play__svg" alt="music">
                <use xlinkHref={`${Icons}#icon-note`}></use>
              </svg>
            </div>
            <div className="track-play__author">
              <a className="track-play__author-link" href="http://">
                Ты та...
              </a>
            </div>
            <div className="track-play__album">
              <a className="track-play__album-link" href="http://">
                Баста
              </a>
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
        </>
      )}
    </div>
  );
};
