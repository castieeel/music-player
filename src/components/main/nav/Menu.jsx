import * as S from "./_nav.styles";

export const Menu = () => {
  return (
    <S.NavMenu>
      <S.NavMenuList>
        <S.NavMenuItem>
          <S.NavMenuLink href="http://">Главное</S.NavMenuLink>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.NavMenuLink href="http://">Мой плейлист</S.NavMenuLink>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.NavMenuLink href="http://">Войти</S.NavMenuLink>
        </S.NavMenuItem>
      </S.NavMenuList>
    </S.NavMenu>
  );
};
