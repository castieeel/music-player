import Icons from "../../../../../assets/img/icon/sprite.svg";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonLoading } from "./SkeletonLoading";
import * as S from "./_playlist.styles";
import { useThemeContext } from "../../../../../contexts/theme";

export const PlaylistItem = (props) => {
  const { theme } = useThemeContext();

  return (
    <S.PlaylistItemS theme={theme}>
      <S.PlaylistTrack theme={theme}>
        <S.TrackTitle theme={theme}>
          <S.TrackTitleImage theme={theme}>
            <S.TrackTitleSvg alt="music" theme={theme}>
              <use xlinkHref={`${Icons}#icon-note`}></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText theme={theme}>
            <SkeletonLoading width={350} height={24}>
              <S.TrackTitleLink theme={theme} href="http://">
                {props.title}
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </SkeletonLoading>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor theme={theme}>
          <SkeletonLoading width={300} height={25}>
            <S.TrackAuthorLink href="http://" theme={theme}>
              {props.author}
            </S.TrackAuthorLink>
          </SkeletonLoading>
        </S.TrackAuthor>
        <S.TrackAlbum theme={theme}>
          <SkeletonLoading width={245} height={25}>
            <S.TrackAlbumLink href="http://" theme={theme}>
              {props.album}
            </S.TrackAlbumLink>
          </SkeletonLoading>
        </S.TrackAlbum>
        <S.TrackTime theme={theme}>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref={`${Icons}#icon-like`}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time} </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItemS>
  );
};
