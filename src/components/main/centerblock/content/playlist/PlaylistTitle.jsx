import Icons from "../../../../../assets/img/icon/sprite.svg";
import * as S from "./_playlist.styles";

export const PlaylistTitle = () => {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
      <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
      <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
      <S.PlaylistTitleCol04>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref={`${Icons}#icon-watch`}></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol04>
    </S.ContentTitle>
  );
};
