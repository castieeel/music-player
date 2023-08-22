import { useSelector } from 'react-redux'
import * as S from "../styled-components/sidebar.styles";
import { selectUserID } from '../store/slices/user'

export const Personal = () => {
  const userID = useSelector(selectUserID)
  return (
    <S.SiderbarPersonal>
      <S.SiderbarPersonalName>User ID: {userID}</S.SiderbarPersonalName>
      <S.SiderbarAvatar></S.SiderbarAvatar>
    </S.SiderbarPersonal>
  );
};
