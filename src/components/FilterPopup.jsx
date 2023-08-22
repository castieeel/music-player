import { useDispatch } from "react-redux";
import FilterListItem from "../components/FilterListItem";
import * as S from "../styled-components/centerblock.styles";
import {
  delAuthor,
  delGenre,
  delYear,
  setAuthor,
  setGenre,
  setYear,
} from "../store/slices/filter";

export const FilterPopup = ({ data, type, storeFilter }) => {
  const dispatch = useDispatch();

  const onClick = (text) => {
    if (storeFilter.includes(text)) {
      switch (type) {
        case "author":
          dispatch(delAuthor(text));
          break;
        case "genre":
          dispatch(delGenre(text));
          break;
        default:
          dispatch(delYear(text));
          break;
      }
    } else {
      switch (type) {
        case "author":
          dispatch(setAuthor(text));
          break;
        case "genre":
          dispatch(setGenre(text));
          break;
        default:
          dispatch(setYear(text));
          break;
      }
    }
  };

  return (
    <S.FilterDropdownMenu>
      <S.FilterWrapperDropdown>
        {data.map((elem) => (
          <FilterListItem
            key={elem}
            text={elem}
            isSelected={storeFilter.includes(elem)}
            onClick={() => {
              onClick(elem);
            }}
          />
        ))}
      </S.FilterWrapperDropdown>
    </S.FilterDropdownMenu>
  );
};
