import Icons from "../../../assets/img/icon/sprite.svg";

export const Volume = () => {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref={`${Icons}#icon-volume`}></use>
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          ></input>
        </div>
      </div>
    </div>
  );
};
