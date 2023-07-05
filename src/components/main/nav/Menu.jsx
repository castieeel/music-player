import { Link } from "react-router-dom";
import * as S from "./nav.styles";
import { useThemeContext } from "../../../contexts/theme";
export const Menu = () => {
  const { theme, toggleTheme } = useThemeContext();

  console.log(theme);
  return (
    <S.NavMenu>
      <S.NavMenuList>
        <S.NavMenuItem>
          <Link className="App-link" to="/">
            <S.NavMenuLink>Главное</S.NavMenuLink>
          </Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <Link className="App-link" to="/playlist">
            <S.NavMenuLink>Мой плейлист</S.NavMenuLink>
          </Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.NavMenuLink>Войти</S.NavMenuLink>
        </S.NavMenuItem>
      </S.NavMenuList>
      {/* СМЕНА ТЕМЫ*/}

      <S.BtnThemeSvg onClick={toggleTheme}>
        <img src={theme.themeButtonPng} alt="theme switcher" />
      </S.BtnThemeSvg>
    </S.NavMenu>
  );
};
