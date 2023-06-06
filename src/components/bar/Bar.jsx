import { Controls } from "./player/Controls";
import { TrackPlay } from "./player/TrackPlay";
import { Volume } from "./player/Volume";
import * as S from "./_bar.styles";

export const Bar = () => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <Controls />
            <TrackPlay />
          </S.BarPlayer>
          <Volume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
