import { Centerblock } from "../../components/Centerblock";
import { Footer } from "../../components/Footer";
import Loader from "../../components/Loader";
import { useGetAllTracksQuery } from "../../services/catalog";
import { BarMain } from "../../components/BarMain";

export const MainPage = () => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const tracksData = data;

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
