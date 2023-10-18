import { useSelector } from "react-redux";
import { selectUserID } from "../store/slices/user";
import * as S from "../styled-components/sidebar.styles";

export const Personal = () => {
  const userID = useSelector(selectUserID);
  return (
    <S.SiderbarPersonal>
      <S.SiderbarPersonalName>User ID: {userID}</S.SiderbarPersonalName>
      <S.SiderbarAvatar></S.SiderbarAvatar>
    </S.SiderbarPersonal>
  );
};
