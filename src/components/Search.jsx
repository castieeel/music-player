import * as S from "../styled-components/centerblock.styles";
import Icons from "../assets/img/icon/sprite.svg";
import { useThemeContext } from "../contexts/theme";

export const Search = () => {
  const { theme } = useThemeContext();
  return (
    <S.CenterblockSearch>
      <S.CenterblockSearchSvg theme={theme}>
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
