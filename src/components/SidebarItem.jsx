import * as S from "../styled-components/sidebar.styles";

export const SidebarItem = (props) => {
  return (
    <S.SiderbarItem>
      <S.SiderbarLink href="#">
        <S.SiderbarImg src={props.src} alt="day's playlist"></S.SiderbarImg>
      </S.SiderbarLink>
    </S.SiderbarItem>
  );
};
