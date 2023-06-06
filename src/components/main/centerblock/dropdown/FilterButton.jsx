import React, { useState } from "react";
import "./filter-button.scss";
import FilterContent from "./FilterContent";

function FilterButton({ title, content, isActive, onClick, hideButtons }) {
  /* Счетчик выбранных элементов из выпадающего меню */
  const [selected, setSelected] = useState([]);

  const selectedFilters = selected.length;
  /* Определяем стиль кнопки */
  const buttonStyle = isActive ? "active" : "";

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    /* Кнопка фильтра */
    <div className="filter__wrapper">
      {selectedFilters >= 1 ? (
        <div className="filter__button__badge">{selectedFilters}</div>
      ) : null}
      <button
        className={`filter__button__header ${buttonStyle}`}
        type="button"
        onClick={onClick}
        isActive={isActive}
      >
        {title}
      </button>
      {/* Выпадающее меню */}
      {isActive ? (
        <div
          className="filter__button__header__box"
          onMouseLeave={() => hideButtons()}
        >
          {/* Контент выпадающего меню */}
          <FilterContent content={content} onSelect={handleSelect} />
        </div>
      ) : null}
    </div>
  );
}

export default FilterButton;
