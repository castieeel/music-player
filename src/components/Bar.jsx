import React, { useState, useEffect, useRef } from "react";
import { TrackPlay } from "./TrackPlay";
import { Volume } from "./Volume";
import { useThemeContext } from "../contexts/theme";
import { useDispatch, useSelector } from "react-redux";
import { useAudio } from "react-use";
import { setCurrentTrackID } from "../store/slices/user";
import { useSetLikeMutation, useSetUnlikeMutation } from "../services/catalog";
import { selectUserID } from "../store/slices/user";
import * as S from "../styled-components/bar.styles";
import Icons from "../assets/img/icon/sprite.svg";

export const Bar = ({ id, tracks }) => {
  const [setLike] = useSetLikeMutation();
  const [setUnlike] = useSetUnlikeMutation();
  const userID = useSelector(selectUserID);
  const [activeMusic, setActiveMusic] = useState(true);
  const [isShuffle, setShuffle] = useState(false);
  const [isRepeat, setRepeat] = useState(false);
  const [isFavourite, setFavourite] = useState(false);
  const progressRef = useRef();
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  console.log(tracks);
  let currentIdPlst = tracks.findIndex((track) => track.id === id);
  currentIdPlst = currentIdPlst === -1 ? 0 : currentIdPlst;
  console.log(currentIdPlst);
  console.log(tracks[currentIdPlst === -1 ? 0 : currentIdPlst].id);

  useEffect(() => {
    dispatch(
      setCurrentTrackID({
        id: tracks[currentIdPlst === -1 ? 0 : currentIdPlst].id,
      })
    );
  }, [dispatch, id, currentIdPlst, tracks]);

  const playingTrack = tracks[currentIdPlst];
  console.log(playingTrack);
  const { id: trackID, stared_user } = playingTrack;
  console.log(trackID);

  useEffect(() => {
    setFavourite(stared_user.some((user) => user.id === userID));
  }, [stared_user, playingTrack.id, userID]);

  const handleSetLike = () => {
    if (isFavourite) setUnlike(trackID);
    else setLike(trackID);
  };

  const [audio, state, controls] = useAudio({
    src: playingTrack.track_file,
    autoPlay: true,
    onEnded: () => {
      if (!isRepeat) {
        handleNext();
      } else {
        controls.seek(0);
        controls.play();
      }
    },
  });

  const getRandom = () => Math.floor(Math.random() * tracks.length);

  const handleNext = () => {
    if (isShuffle) {
      currentIdPlst = getRandom();
    } else currentIdPlst++;

    currentIdPlst =
      currentIdPlst > tracks.length - 1 ? null : tracks[currentIdPlst].id;
    dispatch(setCurrentTrackID({ id: currentIdPlst }));
  };

  const handlePrev = () => {
    if (isShuffle) {
      currentIdPlst = getRandom();
    } else currentIdPlst--;

    currentIdPlst = currentIdPlst < 0 ? null : tracks[currentIdPlst].id;
    dispatch(setCurrentTrackID({ id: currentIdPlst }));
  };

  useEffect(() => {
    progressRef.current.value = state.time || 0;
    progressRef.current.style.setProperty(
      "--range-progress",
      `${(state.time / state.duration) * 100}%`
    );
  }, [state.time, state.duration]);

  const progressChange = () => {
    controls.seek(Number(progressRef.current.value));
  };

  let svgPlay = activeMusic ? `${Icons}#icon-pause` : `${Icons}#icon-play`;
  let svgRepeat = isRepeat
    ? `${Icons}#icon-repeat-true`
    : `${Icons}#icon-repeat`;
  let svgShuffle = isShuffle
    ? `${Icons}#icon-shuffle-true`
    : `${Icons}#icon-shuffle`;
  const controlsData = [
    {
      id: 1,
      name: "prev",
      svg: `${Icons}#icon-prev`,
      svgClassName: S.BtnPrevSvg,
      className: S.PlayerBtnPrev,
      handleClick: () => {
        handlePrev();
      },
    },
    {
      id: 2,
      name: "play",
      svg: svgPlay,
      svgClassName: S.BtnPlaySvg,
      className: S.PlayerBtnPlay,
      handleClick: () => {
        setActiveMusic(!activeMusic);
        activeMusic ? controls.pause() : controls.play();
      },
    },
    {
      id: 3,
      name: "next",
      svg: `${Icons}#icon-next`,
      svgClassName: S.BtnNextSvg,
      className: S.PlayerBtnNext,
      handleClick: () => {
        handleNext();
      },
    },
    {
      id: 4,
      name: "repeat",
      svg: svgRepeat,
      svgClassName: S.BtnRepeatSvg,
      className: S.PlayerBtnRepeat,
      handleClick: () => {
        setRepeat(!isRepeat);
      },
    },
    {
      id: 5,
      name: "shuffle",
      svg: svgShuffle,
      svgClassName: S.BtnShuffleSvg,
      className: S.PlayerBtnShuffle,
      handleClick: () => {
        setShuffle(!isShuffle);
      },
    },
  ];

  return (
    <S.Bar>
      <S.audio></S.audio>
      <S.BarContent>
        {audio}
        <S.BarPlayerProgress
          theme={theme}
          type="range"
          ref={progressRef}
          min="0"
          max={state.duration}
          onChange={progressChange}
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              {controlsData.map((item) => (
                <item.className
                  theme={theme}
                  key={item.id}
                  onClick={item.handleClick}
                >
                  <item.svgClassName theme={theme} alt={item.name}>
                    <use xlinkHref={item.svg}></use>
                  </item.svgClassName>
                </item.className>
              ))}
            </S.PlayerControls>
            <TrackPlay track={playingTrack} />
            <S.TrackPlayLikeDis theme={theme}>
              <S.TrackPlayLike>
                <S.TrackPlayLikeSvg
                  onClick={handleSetLike}
                  theme={theme}
                  alt="like"
                >
                  <use
                    xlinkHref={`${Icons}#icon-${
                      isFavourite ? "like-true" : "like"
                    }`}
                  ></use>
                </S.TrackPlayLikeSvg>
              </S.TrackPlayLike>
            </S.TrackPlayLikeDis>
          </S.BarPlayer>
          <Volume state={state} controls={controls} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
