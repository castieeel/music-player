import { SkeletonTheme } from "react-loading-skeleton";
import { Main } from "./components/main/Main";
import { Bar } from "./components/bar/Bar";
import { Footer } from "./components/footer/Footer";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./app.style";

export const App = () => {
  return (
    <div className="wrapper">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <div className="container">
          <GlobalStyle />
          <AppRoutes />
          <Main />
          <Bar />
          <Footer />
        </div>
      </SkeletonTheme>
    </div>
  );
};
