import { PlaylistTitle } from "./playlist/PlaylistTitle";
import { Playlist } from "./playlist/Playlist";
export const Content = () => {
  return (
    <div className="centerblock__content">
      <PlaylistTitle />
      <Playlist />
    </div>
  );
};
