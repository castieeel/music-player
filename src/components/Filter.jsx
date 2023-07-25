import React, { useState } from "react";
import * as S from "../styled-components/centerblock.styles";
import { useThemeContext } from "../contexts/theme";
import { useSelector } from "react-redux";
import { selectAuthor, selectGenre, selectYear } from "../store/slices/filter";
import { FilterPopup } from "../components/FilterPopup";
import { FilterButton } from "./FilterButton";

export const Filter = ({ data }) => {
  const { theme } = useThemeContext();
  const filterList = [
    {
      type: "author",
      text: "исполнителю",
      data: [...new Set(data.map((elem) => elem.author))],
      storeFilter: useSelector(selectAuthor),
    },
    {
      type: "year",
      text: "году выпуска",
      data: ["новые", "старые"],
      storeFilter: useSelector(selectYear),
    },
    {
      type: "genre",
      text: "жанру",
      data: [...new Set(data.map((elem) => elem.genre))],
      storeFilter: useSelector(selectGenre),
    },
  ];

  const [filterBy, setFilterBy] = useState();

  const handleFilterClick = (type) => {
    if (filterBy === type) {
      setFilterBy();
    } else {
      setFilterBy(type);
    }
  };

  const checkIsActive = (type) => {
    return filterBy === type;
  };

  const filterButtons = filterList.map(({ type, text, data, storeFilter }) => (
    <S.FilterWrapper key={type}>
      <FilterButton
        theme={theme}
        type={type}
        text={text}
        isActive={checkIsActive(type)}
        onClick={() => {
          handleFilterClick(type);
        }}
      />
      {storeFilter.length ? (
        <S.FilterNum>{storeFilter.length}</S.FilterNum>
      ) : (
        ""
      )}
      {checkIsActive(type) && (
        <FilterPopup type={type} data={data} storeFilter={storeFilter} />
      )}
    </S.FilterWrapper>
  ));

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {filterButtons}
    </S.CenterblockFilter>
  );
};
