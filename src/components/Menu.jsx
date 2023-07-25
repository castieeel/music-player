import { Link } from "react-router-dom";
import * as S from "../styled-components/nav.styles";
import { useThemeContext } from "../contexts/theme";

export const Menu = () => {
  const { theme, toggleTheme } = useThemeContext();

  console.log(theme);
  return (
    <S.NavMenu>
      <S.NavMenuList>
        <S.NavMenuItem>
          <Link className="App-link" to="/">
            <S.NavMenuLink theme={theme}>Главное</S.NavMenuLink>
          </Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <Link className="App-link" to="/favourites">
            <S.NavMenuLink theme={theme}>Мой плейлист</S.NavMenuLink>
          </Link>
        </S.NavMenuItem>
        <S.NavMenuItem theme={theme}>
          <S.NavMenuLink>Войти</S.NavMenuLink>
        </S.NavMenuItem>
      </S.NavMenuList>
      {/* СМЕНА ТЕМЫ*/}

      <S.BtnThemeSvg onClick={toggleTheme} theme={theme}>
        <img src={theme.themeButtonPng} alt="theme switcher" />
      </S.BtnThemeSvg>
    </S.NavMenu>
  );
};
