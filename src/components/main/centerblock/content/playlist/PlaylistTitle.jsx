import Icons from "../../../../../assets/img/icon/sprite.svg";

export const PlaylistTitle = () => {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref={`${Icons}#icon-watch`}></use>
        </svg>
      </div>
    </div>
  );
};
