import * as S from "../styled-components/nav.styles";
import { useThemeContext } from "../contexts/theme";

export const Burger = ({ onClick }) => {
  const changeVisibility = () => {
    onClick();
  };
  const { theme } = useThemeContext();

  return (
    <S.NavBurger onClick={changeVisibility}>
      <S.BurgerLine theme={theme}></S.BurgerLine>
      <S.BurgerLine theme={theme}></S.BurgerLine>
      <S.BurgerLine theme={theme}></S.BurgerLine>
    </S.NavBurger>
  );
};
