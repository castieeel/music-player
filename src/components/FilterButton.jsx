import React from "react";
import * as S from "../styled-components/centerblock.styles";

export const FilterButton = ({ type, text, isActive, onClick }) => {
  return (
    <S.FilterButton isActive={isActive} onClick={onClick}>
      {text}
    </S.FilterButton>
  );
};
