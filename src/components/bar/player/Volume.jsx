import Icons from "../../../assets/img/icon/sprite.svg";
import * as S from "../_bar.styles";

export const Volume = () => {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref={`${Icons}#icon-volume`}></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            name="range"
          ></S.VolumeProgressLine>
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
//_btn
