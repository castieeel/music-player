import { useSelector } from "react-redux";
import { PlaylistItem } from "./PlaylistItem";
import { selectSearch } from "../store/slices/filter";
import * as S from "../styled-components/playlist.styles";

export const Playlist = ({ data, error }) => {
  const search = useSelector(selectSearch);

  let searchData = [...data];

  if (search) {
    searchData = searchData.filter((track) =>
      track.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data?.length) {
    return <p>No tracks!</p>;
  }

  return (
    <S.ContentPlaylist>
      {searchData.map((track) => (
        <PlaylistItem key={track.id} track={track} />
      ))}
    </S.ContentPlaylist>
  );
};
