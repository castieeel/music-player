import React, { useState } from "react";
import * as S from "./centerblock.styles";
import FilterButton from "./dropdown/FilterButton";

export const Filter = () => {
  const [activeButton, setActiveButton] = useState("");

  const toggleFilter = (filterName) => {
    // если состояние activeButton равен значению filterName
    // это значит, что мы нажали на тот же фильтр, и скрываем блок
    setActiveButton(activeButton === filterName ? "" : filterName);
  };

  const content = [
    { id: 1, name: "Тест 1" },
    { id: 2, name: "Тест 2" },
    { id: 3, name: "Тест 3" },
    { id: 4, name: "Тест 4" },
    { id: 5, name: "Тест 5" },
    { id: 6, name: "Тест 6" },
    { id: 7, name: "Тест 7" },
  ];

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterButton
        title="исполнителю"
        isActive={activeButton === "author"}
        onClick={() => toggleFilter("author")}
        hideButtons={() => setActiveButton("")}
        content={content}
      />
      <FilterButton
        title="году"
        isActive={activeButton === "year"}
        onClick={() => toggleFilter("year")}
        hideButtons={() => setActiveButton("")}
        content={content}
      />
      <FilterButton
        title="жанру"
        isActive={activeButton === "genre"}
        onClick={() => toggleFilter("genre")}
        hideButtons={() => setActiveButton("")}
        content={content}
      />
    </S.CenterblockFilter>
  );
};
