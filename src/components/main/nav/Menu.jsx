import { Link } from "react-router-dom";
import * as S from "./nav.styles";
import { useThemeContext } from "../../../contexts/theme";
import sprite from "../../../../src/assets/img/icon/sprite.svg";

export const Menu = () => {
  const { toggleTheme } = useThemeContext();
  const { theme } = useThemeContext();
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
      <S.BtnThemeSvg>
        <svg alt="theme" onClick={toggleTheme}>
          <use
            xlinkHref={
              theme === "dark"
                ? `${sprite}#theme-dark`
                : `${sprite}#theme-light`
            }
          />
        </svg>
      </S.BtnThemeSvg>
    </S.NavMenu>
  );
};
