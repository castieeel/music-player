import * as S from "./styles";

export const Burger = ({ onClick }) => {
  const changeVisibility = () => {
    onClick();
  };

  return (
    <S.NavBurger onClick={changeVisibility}>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
    </S.NavBurger>
  );
};
