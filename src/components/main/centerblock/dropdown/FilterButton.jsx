import React, { useState } from "react";
import FilterContent from "./FilterContent";
import * as S from "../centerblock.styles";

function FilterButton({ title, content, isActive, onClick, hideButtons }) {
  /* Счетчик выбранных элементов из выпадающего меню */
  const [selected, setSelected] = useState([]);

  const selectedFilters = selected.length;
  /* Определяем стиль кнопки */

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    /* Кнопка фильтра */
    <S.FilterWrapper>
      {selectedFilters >= 1 ? (
        <S.FilterButtonBadge>{selectedFilters}</S.FilterButtonBadge>
      ) : null}
      <S.Button type="button" onClick={onClick} isActive={isActive}>
        {title}
      </S.Button>
      {/* Выпадающее меню */}
      {isActive ? (
        <S.FilterButtonHeaderBox onMouseLeave={() => hideButtons()}>
          {/* Контент выпадающего меню */}
          <FilterContent content={content} onSelect={handleSelect} />
        </S.FilterButtonHeaderBox>
      ) : null}
    </S.FilterWrapper>
  );
}

export default FilterButton;
