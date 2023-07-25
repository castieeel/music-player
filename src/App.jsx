import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./routes";
import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./contexts/theme";
import { GlobalStyle } from "./styled-components/app.style";
import { useTokenRefreshMutation } from "./services/user";
import {
  selectIsAuthenticated,
  selectTokenRefresh,
  setAccess,
} from "./store/slices/user";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tokenRefresh] = useTokenRefreshMutation();
  const token = useSelector(selectTokenRefresh);
  const isAuth = useSelector(selectIsAuthenticated);

  const changeToken = () => {
    if (isAuth) {
      tokenRefresh({ refresh: token })
        .unwrap()
        .then((data) => {
          console.log(data);
          dispatch(setAccess({ access: data.access }));
        })
        .catch((e) => {
          console.error(e);
          localStorage.clear();
          navigate("/");
        });
    }
  };

  useEffect(() => {
    setInterval(() => {
      changeToken();
    }, 300000);
  }, []);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className="wrapper">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <div className="container">
            <GlobalStyle theme={currentTheme} />
            <AppRoutes />
            {/* <Main />
            <Bar />
            <Footer /> */}
          </div>
        </SkeletonTheme>
      </div>
    </ThemeContext.Provider>
  );
};
