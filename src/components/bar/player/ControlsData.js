import Icons from "../../../assets/img/icon/sprite.svg";
import * as S from "./styles";

export const controlsData = [
  {
    id: 1,
    name: "prev",
    svg: `${Icons}#icon-prev`,
    svgClassName: "player__btn-prev-svg",
    className: "player__btn-prev",
    handleClick: () => {
      //логика
    },
  },
  {
    id: 2,
    name: "play",
    svg: `${Icons}#icon-play`,
    svgClassName: "player__btn-play-svg",
    className: "player__btn-play _btn",
    handleClick: () => {
      //логика
    },
  },
  {
    id: 3,
    name: "next",
    svg: `${Icons}#icon-next`,
    svgClassName: "player__btn-next-svg",
    className: "player__btn-next",
    handleClick: () => {
      //логика
    },
  },
  {
    id: 4,
    name: "repeat",
    svg: `${Icons}#icon-repeat`,
    svgClassName: "player__btn-repeat-svg",
    className: "player__btn-repeat _btn-icon",
    handleClick: () => {
      //логика
    },
  },
  {
    id: 5,
    name: "shuffle",
    svg: `${Icons}#icon-shuffle`,
    svgClassName: "player__btn-shuffle-svg",
    className: "player__btn-shuffle _btn-icon",
    handleClick: () => {
      //логика
    },
  },
];
