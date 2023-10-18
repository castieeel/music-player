import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/theme";
import { setLogout } from "../store/slices/user";
import { useDispatch } from "react-redux";
import * as S from "../styled-components/nav.styles";

export const Menu = () => {
  const { theme, toggleTheme } = useThemeContext();

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLogout());
    localStorage.clear();
  };

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
        <S.NavMenuItem>
          <S.NavMenuLink onClick={() => onLogout()} theme={theme}>
            Выйти
          </S.NavMenuLink>
        </S.NavMenuItem>
      </S.NavMenuList>
      {/* СМЕНА ТЕМЫ*/}

      <S.BtnThemeSvg onClick={toggleTheme} theme={theme}>
        <img src={theme.themeButtonPng} alt="theme switcher" />
      </S.BtnThemeSvg>
    </S.NavMenu>
  );
};
