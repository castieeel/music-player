import { SkeletonTheme } from "react-loading-skeleton";
import { Main } from "./components/main/Main";
import { Bar } from "./components/bar/Bar";
import { Footer } from "./components/footer/Footer";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { ThemeContext, themes } from "./contexts/theme";
import { GlobalStyle } from "./app.style";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
    console.log(currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
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
    </ThemeContext.Provider>
  );
};
