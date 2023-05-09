import { DropdownItem } from "./DropdownItem";
import { DropdownRadioBtn } from "./DropdownRadioBtn";

export const Dropdown = (props) => {
  let content = "";
  let dropdownType = "";
  if (props.content === "button-author") {
    content = "ItemArtist";
    dropdownType = "list";
  }
  if (props.content === "button-genre") {
    content = "ItemGenre";
    dropdownType = "list";
  }
  if (props.content === "button-year") {
    content = "Year";
    dropdownType = "radio";
  }

  if (dropdownType === "list") {
    return (
      <ul>
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
        <DropdownItem dropdownType={dropdownType} text={content} />
      </ul>
    );
  }

  if (dropdownType === "radio") {
    return <DropdownRadioBtn></DropdownRadioBtn>;
  }
};
