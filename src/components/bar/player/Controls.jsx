import { controlsData } from "./ControlsData";
import * as S from "./styles";

export const Controls = () => {
  return (
    <S.PlayerControls>
      {controlsData.map((item) => (
        <div key={item.id} className={item.className}>
          <svg className={item.svgClassName} alt={item.name}>
            <use xlinkHref={item.svg}></use>
          </svg>
        </div>
      ))}
    </S.PlayerControls>
  );
};
