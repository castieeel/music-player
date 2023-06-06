import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import React from "react";
import * as S from "./styles";
const { useState } = React;

export const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <S.MainNav>
      <Logo />
      <Burger onClick={toggleVisibility} />
      {visible && <Menu />}
    </S.MainNav>
  );
};
