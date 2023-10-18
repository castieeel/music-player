import { useSelector } from "react-redux";
import { Centerblock } from "../../components/Centerblock";
import { BarMain } from "../../components/BarMain";
import { Footer } from "../../components/Footer";
import Loader from "../../components/Loader";
import { useGetAllTracksQuery } from "../../services/catalog";
import { selectUserID } from "../../store/slices/user";

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
      <BarMain data={tracksData} />
      <Footer />
    </>
  );
};
