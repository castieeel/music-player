import * as S from "../styled-components/centerblock.styles";

function FilterListItem({ text, isSelected, onClick }) {
  return (
    <S.DropdownItem isSelected={isSelected} onClick={onClick}>
      {text}
    </S.DropdownItem>
  );
}

export default FilterListItem;
