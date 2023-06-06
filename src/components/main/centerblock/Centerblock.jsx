import { Search } from "./Search";
import { Filter } from "./Filter";
import { Content } from "./content/Content";
import * as S from "./_centerblock.styles";

export const Centerblock = () => {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <Content />
    </S.MainCenterblock>
  );
};
