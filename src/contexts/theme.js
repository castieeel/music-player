import React, { useContext } from "react";
import themeDarkPng from "../assets/img/themeDarkPng.png";
import themeLightPng from "../assets/img/themeLightPng.png";

export const themes = {
  light: {
    name: "light",
    color: "#181818",
    background: "#FFFFFF",
    navBackgroundColor: "#F6F5F3",
    themeButtonPng: themeLightPng,
  },
  dark: {
    name: "dark",
    color: "#FFFFFF",
    background: "#383838",
    navBackgroundColor: "#181818",
    themeButtonPng: themeDarkPng,
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};

export default ThemeContext;
