import { Main } from "./components/main/Main";
import { Bar } from "./components/bar/Bar";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
      </div>
    </div>
  );
};
