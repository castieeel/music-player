import React from "react";

const FilterContent = ({ content, onSelect }) => {
  console.log(content);
  const filterItem = content.map((item) => (
    <li
      className="filter__item dropdownItem"
      onClick={() => onSelect(item.id)}
      key={item.id}
    >
      {item.name}
    </li>
  ));

  return (
    <div className="filter__button__header__box__content">
      <ul>{filterItem}</ul>
    </div>
  );
};

export default FilterContent;
