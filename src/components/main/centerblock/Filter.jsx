import React, { useState, useEffect, useRef } from "react";
import FilterButton from "./dropdown/FilterButton";

export const Filter = () => {
  const [activeButton, setActiveButton] = useState("");
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [dropdownContent, setDropdownContent] = useState("");

  const menuRef = useRef();

  useEffect(() => {
    const closeDropdown = (event) => {
      const target = event.target;

      if (!menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  });

  const openDropdown = (event) => {
    const target = event.target;

    if (!target.classList.contains("filter__button")) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top;
    setTop(targetTop);
    const targetLeft = target.getBoundingClientRect().left;
    setLeft(targetLeft);

    const targetClass = target.classList[1];
    setDropdownContent(targetClass);
    console.log(targetClass);

    setOpen(true);
  };

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
    <div
      className="centerblock__filter filter"
      onClick={openDropdown}
      ref={menuRef}
    >
      <div className="filter__title">Искать по:</div>
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

      {/* <div tabIndex={0} className="filter__button button-author _btn-text">
        исполнителю
      </div>
      <div tabIndex={0} className="filter__button button-year _btn-text">
        году выпуска
      </div>
      <div tabIndex={0} className="filter__button button-genre _btn-text">
        жанру
      </div> */}
    </div>
  );
};
