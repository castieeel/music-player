import * as S from "./bar.styles";
import React, { useState, useEffect } from "react";
import Icons from "../../assets/img/icon/sprite.svg";
import { TrackPlay } from "./player/TrackPlay";
import { Volume } from "./player/Volume";

export const Bar = () => {
  const [activeMusic, setActiveMusic] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const btnPlay = React.createRef();
  const svgPlay = activeMusic ? `${Icons}#icon-pause` : `${Icons}#icon-play`;

  useEffect(() => {
    btnPlay.current.ontimeupdate = (e) => {
      setCurrentTime(btnPlay.current.currentTime);
    };
  }, [btnPlay]);

  function handleProgress(value) {
    btnPlay.current.currentTime = value;
    setCurrentTime(btnPlay.current.currentTime);
  }

  const controlsData = [
    {
      id: 1,
      name: "prev",
      svg: `${Icons}#icon-prev`,
      svgClassName: S.BtnPrevSvg,
      className: S.PlayerBtnPrev,
      handleClick: () => {
        //логика
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
        activeMusic ? btnPlay.current.pause() : btnPlay.current.play();
      },
    },
    {
      id: 3,
      name: "next",
      svg: `${Icons}#icon-next`,
      svgClassName: S.BtnNextSvg,
      className: S.PlayerBtnNext,
      handleClick: () => {
        //логика
      },
    },
    {
      id: 4,
      name: "repeat",
      svg: `${Icons}#icon-repeat`,
      svgClassName: S.BtnRepeatSvg,
      className: S.PlayerBtnRepeat,
      handleClick: () => {
        //логика //_btn-icon
      },
    },
    {
      id: 5,
      name: "shuffle",
      svg: `${Icons}#icon-shuffle`,
      svgClassName: S.BtnShuffleSvg,
      className: S.PlayerBtnShuffle,
      handleClick: () => {
        //логика  _btn-icon"
      },
    },
  ];

  return (
    <S.Bar>
      <S.audio
        ref={btnPlay}
        controls
        src="/Bobby_Marleni_-_Dropin.mp3"
      ></S.audio>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          max={btnPlay.current ? btnPlay.current.duration : 0}
          value={currentTime}
          onChange={(e) => handleProgress(e.target.value)}
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              {controlsData.map((item) => (
                <item.className key={item.id} onClick={item.handleClick}>
                  <item.svgClassName alt={item.name}>
                    <use xlinkHref={item.svg}></use>
                  </item.svgClassName>
                </item.className>
              ))}
            </S.PlayerControls>
            <TrackPlay />
          </S.BarPlayer>
          <Volume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
