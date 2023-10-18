import React from "react";
import { Nav } from "../components/Nav";
import { Search } from "./Search";
import { Filter } from "./Filter";
import { Sidebar } from "./Sidebar";
import { PlaylistTitle } from "./PlaylistTitle";
import { Playlist } from "./Playlist";
import { useThemeContext } from "../contexts/theme";
import { useSelector } from "react-redux";
import { selectAuthor, selectGenre, selectYear } from "../store/slices/filter";
import * as S from "../styled-components/centerblock.styles";

export const Centerblock = ({ data, error }) => {
  const { theme } = useThemeContext();
  const byAuthor = useSelector(selectAuthor);
  const byGenre = useSelector(selectGenre);
  const byYear = useSelector(selectYear);

  let filteredData = [...data];

  if (byAuthor.length > 0) {
    filteredData = filteredData.filter(({ author }) =>
      byAuthor.includes(author)
    );
  }

  if (byGenre.length > 0) {
    filteredData = filteredData.filter(({ genre }) => byGenre.includes(genre));
  }

  switch (byYear[0]) {
    case "новые":
      filteredData = filteredData
        .filter((el) => el)
        .sort(
          ({ release_date: adate }, { release_date: bdate }) =>
            new Date(bdate).valueOf() - new Date(adate).valueOf()
        );
      break;
    case "старые":
      filteredData = filteredData
        .filter((el) => el)
        .sort(
          ({ release_date: adate }, { release_date: bdate }) =>
            new Date(adate).valueOf() - new Date(bdate).valueOf()
        );
      break;
    default:
      break;
  }
  return (
    <S.Main>
      <Nav />
      <S.MainCenterblock theme={theme}>
        <Search />
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter data={data} />
        <S.CenterblockContent>
          <PlaylistTitle />
          <Playlist data={filteredData} error={error} />
        </S.CenterblockContent>
      </S.MainCenterblock>
      <Sidebar />
    </S.Main>
  );
};
