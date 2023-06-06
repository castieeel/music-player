import Icons from "../../../../../assets/img/icon/sprite.svg";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonLoading } from "./SkeletonLoading";
import * as S from "./styles";

export const PlaylistItem = (props) => {
  return (
    <S.PlaylistItemS>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref={`${Icons}#icon-note`}></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <SkeletonLoading width={350} height={24}>
              <S.TrackTitleLink href="http://">
                {props.title}
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </SkeletonLoading>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <SkeletonLoading width={300} height={25}>
            <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
          </SkeletonLoading>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <SkeletonLoading width={245} height={25}>
            <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
          </SkeletonLoading>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref={`${Icons}#icon-like`}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time} </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItemS>
  );
};
