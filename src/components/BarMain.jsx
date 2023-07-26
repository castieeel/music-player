import { useSelector } from "react-redux";
import { selectCurrentTrackID } from "../store/slices/user";
import { Bar } from "../components/Bar";

export const BarMain = ({ data }) => {
  const currentTrackID = useSelector(selectCurrentTrackID);

  return currentTrackID ? <Bar tracks={data} id={currentTrackID} /> : null;
};
