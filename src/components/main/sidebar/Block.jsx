import Skeleton from "react-loading-skeleton";
import playlist1 from "../../../assets/img/playlist01.png";
import playlist2 from "../../../assets/img/playlist02.png";
import playlist3 from "../../../assets/img/playlist03.png";
import { SidebarItem } from "./SidebarItem";
import * as S from "./styles";

export const Block = () => {
  return (
    <S.SiderbarBlock>
      <S.SiderbarList>
        <SidebarItem src={playlist1 || <Skeleton />} />
        <SidebarItem src={playlist2 || <Skeleton />} />
        <SidebarItem src={playlist3 || <Skeleton />} />
      </S.SiderbarList>
    </S.SiderbarBlock>
  );
};
