import React, { useContext } from "react";

export const themes = {
  light: "light",
  dark: "dark",
};

// export const themes = {
//   light: {
//     color: "#181818",
//     background: "#FFFFFF",
//   },
//   dark: {
//     color: "#FFFFFF",
//     background: "#383838",
//   },
// };

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};
