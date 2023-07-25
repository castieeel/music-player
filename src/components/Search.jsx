import * as S from "../styled-components/centerblock.styles";
import Icons from "../assets/img/icon/sprite.svg";

export const Search = () => {
  return (
    <S.CenterblockSearch>
      <S.CenterblockSearchSvg>
        <use xlinkHref={`${Icons}#icon-search`}></use>
      </S.CenterblockSearchSvg>
      <S.CenterblockSearchText
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.CenterblockSearchText>
    </S.CenterblockSearch>
  );
};
