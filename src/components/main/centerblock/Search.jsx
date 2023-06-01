import Icons from "../../../assets/img/icon/sprite.svg";

export const Search = () => {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref={`${Icons}#icon-search`}></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </div>
  );
};
