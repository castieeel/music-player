import Skeleton from "react-loading-skeleton";
import playlist1 from "../assets/img/playlist01.png";
import playlist2 from "../assets/img/playlist02.png";
import playlist3 from "../assets/img/playlist03.png";
import { SidebarItem } from "./SidebarItem";
import * as S from "../styled-components/sidebar.styles";

export const Block = () => {
  return (
    <S.SiderbarBlock>
      <S.SiderbarList>
        <SidebarItem link="/playlist/1" src={playlist1 || <Skeleton />} />
        <SidebarItem link="/playlist/2" src={playlist2 || <Skeleton />} />
        <SidebarItem link="/playlist/3" src={playlist3 || <Skeleton />} />
      </S.SiderbarList>
    </S.SiderbarBlock>
  );
};
