import Icons from "../../../../../assets/img/icon/sprite.svg";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonLoading } from "./SkeletonLoading";

export const PlaylistItem = (props) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${Icons}#icon-note`}></use>
            </svg>
          </div>
          <div className="track__title-text">
            <SkeletonLoading width={350} height={24}>
              <a className="track__title-link" href="http://">
                {props.title}
                <span className="track__title-span"></span>
              </a>
            </SkeletonLoading>
          </div>
        </div>
        <div className="track__author">
          <SkeletonLoading width={300} height={25}>
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          </SkeletonLoading>
        </div>
        <div className="track__album">
          <SkeletonLoading width={245} height={25}>
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          </SkeletonLoading>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={`${Icons}#icon-like`}></use>
          </svg>
          <span className="track__time-text">{props.time} </span>
        </div>
      </div>
    </div>
  );
};
