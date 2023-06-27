import Icons from "../../../assets/img/icon/sprite.svg";
import * as S from "../bar.styles";

export const controlsData = [
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
    svg: `${Icons}#icon-play`,
    svgClassName: S.BtnPlaySvg,
    className: S.PlayerBtnPlay,
    handleClick: () => {
      //логика
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
