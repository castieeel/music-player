import { useParams } from "react-router-dom";
import { Centerblock } from "../../components/Centerblock";
import { BarMain } from "../../components/BarMain";
import { Footer } from "../../components/Footer";
import Loader from "../../components/Loader";
import { useGetPlaylistByIDQuery } from "../../services/catalog";

export const PlaylistPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading } = useGetPlaylistByIDQuery(id);
  const tracksData = data;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Centerblock data={tracksData.items} error={error} />
      <BarMain data={tracksData.items} />
      <Footer />
    </>
  );
};
