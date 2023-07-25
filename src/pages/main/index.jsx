import { Centerblock } from "../../components/Centerblock";
import { Bar } from "../../components/Bar";
import { Footer } from "../../components/Footer";
import Loader from "../../components/Loader";
import { useGetAllTracksQuery } from "../../services/catalog";

export const MainPage = () => {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const tracksData = data;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Centerblock data={tracksData} error={error} />
      <Bar data={tracksData} />
      <Footer />
    </>
  );
};
