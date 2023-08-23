import Icons from "../assets/img/icon/sprite.svg";
import * as S from "../styled-components/bar.styles";
import { useThemeContext } from "../contexts/theme";
import { useEffect } from "react";

export const Volume = ({ state, controls }) => {
  const { theme } = useThemeContext();
  const handleValueChange = (event) => {
    controls.volume(Number(event.target.value) / 10);
  };

  useEffect(() => {
    controls.volume(0.5);
  }, []);
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume" theme={theme}>
            <use xlinkHref={`${Icons}#icon-volume`}></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            name="range"
            min="0"
            max="10"
            defaultValue={state.volume * 10}
            onChange={handleValueChange}
          ></S.VolumeProgressLine>
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
