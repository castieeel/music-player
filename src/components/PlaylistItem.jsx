import Icons from "../assets/img/icon/sprite.svg";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { SkeletonLoading } from "./SkeletonLoading";
import * as S from "../styled-components/playlist.styles";
import { useThemeContext } from "../contexts/theme";
import { useSetLikeMutation, useSetUnlikeMutation } from "../services/catalog";
import { useDispatch, useSelector } from "react-redux";
import { selectUserID, setCurrentTrackID } from "../store/slices/user";

export const PlaylistItem = ({ track }) => {
  const { theme } = useThemeContext();
  const [setLike] = useSetLikeMutation();
  const dispatch = useDispatch();
  const [setUnlike] = useSetUnlikeMutation();
  const userID = useSelector(selectUserID);

  const {
    id: trackID,
    name,
    author,
    album,
    stared_user,
    duration_in_seconds,
    track_file,
    release_date,
  } = track;
  const [isFavourite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(stared_user.some((user) => user.id === userID));
  }, [track]);

  const handleSetLike = () => {
    if (isFavourite) setUnlike(trackID);
    else setLike(trackID);
  };

  const handleClickTrack = (event) => {
    event.preventDefault();
    dispatch(setCurrentTrackID({ id: trackID }));
  };

  function secondsToMinutes(time) {
    return (
      Math.floor(time / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      Math.floor(time % 60)
        .toString()
        .padStart(2, "0")
    );
  }
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
              <S.TrackTitleLink
                theme={theme}
                href={track_file}
                onClick={handleClickTrack}
              >
                {name}
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </SkeletonLoading>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor theme={theme}>
          <SkeletonLoading width={300} height={25}>
            <S.TrackAuthorLink href="http://" theme={theme}>
              {author}
            </S.TrackAuthorLink>
          </SkeletonLoading>
        </S.TrackAuthor>
        <S.TrackAlbum theme={theme}>
          <SkeletonLoading width={245} height={25}>
            <S.TrackAlbumLink href="http://" theme={theme}>
              {album} ({release_date})
            </S.TrackAlbumLink>
          </SkeletonLoading>
        </S.TrackAlbum>
        <S.TrackTime theme={theme}>
          <S.TrackTimeSvg alt="time" onClick={handleSetLike}>
            <use
              xlinkHref={`${Icons}#icon-${isFavourite ? "like" : "dislike"}`}
            ></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {secondsToMinutes(duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItemS>
  );
};
