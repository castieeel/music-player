import * as S from "./bar.styles";
import React, { useState, useEffect, useRef } from "react";
import Icons from "../../assets/img/icon/sprite.svg";
import { TrackPlay } from "./player/TrackPlay";
import { Volume } from "./player/Volume";
import { useThemeContext } from "../../contexts/theme";

export const Bar = () => {
  const [activeMusic, setActiveMusic] = useState(false);
  const svgPlay = activeMusic ? `${Icons}#icon-pause` : `${Icons}#icon-play`;
  const audioRef = useRef(null);
  const progressRef = useRef();
  const { theme } = useThemeContext();

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
        activeMusic ? audioRef.current.pause() : audioRef.current.play();
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
      <S.audio ref={audioRef} src="/Bobby_Marleni_-_Dropin.mp3"></S.audio>
      <S.BarContent>
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
            <TrackPlay />
          </S.BarPlayer>
          <Volume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
