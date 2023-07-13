import React, { useContext } from "react";
import themeDarkPng from "../assets/img/themeDarkPng.png";
import themeLightPng from "../assets/img/themeLightPng.png";

export const themes = {
  light: {
    name: "light",
    color: "#181818",
    background: "#FFFFFF",
    backgroundContainer: "#FFFFFF",
    navBackgroundColor: "#F6F5F3",
    themeButtonPng: themeDarkPng,
    playlistColor: "#B1B1B1",
    backgroundTrackTitleSvg: "#F6F4F4",
    backgroundBar: "rgba(250, 250, 250, 0.5)",
    btnBarColor: "#B1B1B1",
    albumBarColor: "#F6F4F4",
  },
  dark: {
    name: "dark",
    color: "#FFFFFF",
    background: "#383838",
    backgroundContainer: "#181818",
    navBackgroundColor: "#181818",
    themeButtonPng: themeLightPng,
    playlistColor: "#696969",
    backgroundTrackTitleSvg: "#4e4e4e",
    backgroundBar: "rgba(28, 28, 28, 0.5)",
    btnBarColor: "#d9d9d9",
    albumBarColor: "#313131",
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
