import { Nav } from "../../components/Nav";
import { Bar } from "../../components/Bar";
import { Centerblock } from "../../components/Centerblock";
import Loader from "../../components/Loader";
import { useGetAllTracksQuery } from "../../services/catalog";
import { selectUserID } from "../../store/slices/user";
import { useSelector } from "react-redux";

export const FavouritesPage = () => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const userID = useSelector(selectUserID);

  const tracksData = data.filter((track) =>
    track.stared_user.some((user) => user.id === userID)
  );

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Centerblock data={tracksData} error={error} />
      <Bar data={tracksData} />
      <footer className="footer"></footer>
    </>
  );
};
