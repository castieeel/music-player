import { controlsData } from "./ControlsData";
import * as S from "../bar.styles";

export const Controls = () => {
  return (
    <S.PlayerControls>
      {controlsData.map((item) => (
        <item.className key={item.id}>
          <item.svgClassName alt={item.name}>
            <use xlinkHref={item.svg}></use>
          </item.svgClassName>
        </item.className>
      ))}
    </S.PlayerControls>
  );
};
