import * as S from "../styled-components/bar.styles";
import React, { useState, useEffect, useRef } from "react";
import Icons from "../assets/img/icon/sprite.svg";
import { TrackPlay } from "./TrackPlay";
import { Volume } from "./Volume";
import { useThemeContext } from "../contexts/theme";
import { useDispatch } from "react-redux";
import { useAudio } from "react-use";
import { setCurrentTrackID } from "../store/slices/user";

export const Bar = ({ id, tracks }) => {
  const [activeMusic, setActiveMusic] = useState(false);
  const svgPlay = activeMusic ? `${Icons}#icon-pause` : `${Icons}#icon-play`;
  const audioRef = useRef(null);
  const progressRef = useRef();
  const { theme } = useThemeContext();

  const dispatch = useDispatch();
  const [isShuffle, setShuffle] = useState(false);
  const [isRepeat, setRepeat] = useState(false);

  let ind = tracks.findIndex((track) => track.id === id);

  useEffect(() => {
    dispatch(setCurrentTrackID({ id: tracks[ind === -1 ? 0 : ind].id }));
    console.log(tracks[ind].id);
  }, [dispatch, id, ind, tracks]);

  const playingTrack = tracks[ind];

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
      ind = getRandom();
    } else ind++;

    ind = ind > tracks.length - 1 ? null : tracks[ind].id;
    dispatch(setCurrentTrackID({ id: ind }));
  };

  const handlePrev = () => {
    if (isShuffle) {
      ind = getRandom();
    } else ind--;

    ind = ind < 0 ? null : tracks[ind].id;
    dispatch(setCurrentTrackID({ id: ind }));
  };

  const ProgressChange = () => {
    audioRef.current.currentTime =
      (progressRef.current.value / 1000) * audioRef.current.duration;
  };

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 1000;
      progressRef.current.value = progress;
    };
  }, [audioRef, progressRef]);

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
        //логика
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
      svg: `${Icons}#icon-repeat`,
      svgClassName: S.BtnRepeatSvg,
      className: S.PlayerBtnRepeat,
      handleClick: () => {
        setRepeat(!isRepeat);
      },
    },
    {
      id: 5,
      name: "shuffle",
      svg: `${Icons}#icon-shuffle`,
      svgClassName: S.BtnShuffleSvg,
      className: S.PlayerBtnShuffle,
      handleClick: () => {
        setShuffle(!isShuffle);
      },
    },
  ];

  return (
    <S.Bar>
      <S.audio ref={audioRef} src="/Bobby_Marleni_-_Dropin.mp3"></S.audio>
      <S.BarContent>
        {audio}
        <S.BarPlayerProgress
          type="range"
          ref={progressRef}
          defaultValue={0}
          max={1000}
          onChange={ProgressChange}
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
          </S.BarPlayer>
          <Volume state={state} controls={controls} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
