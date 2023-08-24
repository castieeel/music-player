import React from "react";
import * as S from "../styled-components/centerblock.styles";

export const FilterButton = ({ text, onClick }) => {
  return <S.FilterButton onClick={onClick}>{text}</S.FilterButton>;
};
