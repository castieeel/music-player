import { SkeletonTheme } from "react-loading-skeleton";
import { Main } from "./components/main/Main";
import { Bar } from "./components/bar/Bar";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  //состояние для имитации загрузки
 

  return (
    <div className="wrapper">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <div className="container">
          <Main />
          <Bar />
          <Footer />
        </div>
      </SkeletonTheme>
    </div>
  );
};
