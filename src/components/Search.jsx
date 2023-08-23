import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useThemeContext } from "../contexts/theme";
import { setSearch } from "../store/slices/filter";
import * as S from "../styled-components/centerblock.styles";
import Icons from "../assets/img/icon/sprite.svg";

export const Search = () => {
  const { theme } = useThemeContext();

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value.trim());
  };

  useEffect(() => {
    dispatch(setSearch(searchText));
  }, [dispatch, searchText]);

  return (
    <S.CenterblockSearch>
      <S.CenterblockSearchSvg theme={theme}>
        <use xlinkHref={`${Icons}#icon-search`}></use>
      </S.CenterblockSearchSvg>
      <S.CenterblockSearchText
        theme={theme}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleChange}
      ></S.CenterblockSearchText>
    </S.CenterblockSearch>
  );
};
