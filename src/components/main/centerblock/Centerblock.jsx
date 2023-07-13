import { Search } from "./Search";
import { Filter } from "./Filter";
import { Content } from "./content/Content";
import * as S from "./centerblock.styles";
import { useThemeContext } from "../../../contexts/theme";

export const Centerblock = () => {
  const { theme} = useThemeContext();
  return (
    <S.MainCenterblock theme={theme}>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <Content />
    </S.MainCenterblock>
  );
};
