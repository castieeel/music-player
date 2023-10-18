import { Link } from "react-router-dom";
import * as S from "../styled-components/sidebar.styles";

export const SidebarItem = (props) => {
  return (
    <S.SiderbarItem>
      <Link to={props.link}>
        <S.SiderbarImg src={props.src}></S.SiderbarImg>
      </Link>
    </S.SiderbarItem>
  );
};
