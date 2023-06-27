import { PlaylistTitle } from "./playlist/PlaylistTitle";
import { Playlist } from "./playlist/Playlist";
import * as S from "../centerblock.styles";

export const Content = () => {
  return (
    <S.CenterblockContent>
      <PlaylistTitle />
      <Playlist />
    </S.CenterblockContent>
  );
};
