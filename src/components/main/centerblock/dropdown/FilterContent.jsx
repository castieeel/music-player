import React from "react";
import * as S from "../centerblock.styles";


const FilterContent = ({ content, onSelect }) => {
  console.log(content);
  const filterItem = content.map((item) => (
    <S.FilterItem onClick={() => onSelect(item.id)} key={item.id}>
      {item.name}
    </S.FilterItem>
  ));

  return (
    <S.FilterButtonHeaderBox>
      <S.FilterButtonHeaderBoxUl>{filterItem}</S.FilterButtonHeaderBoxUl>
    </S.FilterButtonHeaderBox>
  );
};

export default FilterContent;
