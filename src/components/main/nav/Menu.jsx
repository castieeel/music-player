import { Link } from "react-router-dom";
import * as S from "./nav.styles";

export const Menu = () => {
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
    </S.NavMenu>
  );
};
