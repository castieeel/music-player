import React, { useState } from "react";
import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import { useThemeContext } from "../contexts/theme";
import * as S from "../styled-components/nav.styles";

export const Nav = () => {
  const { theme } = useThemeContext();
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <S.MainNav theme={theme}>
      <Logo />
      <Burger onClick={toggleVisibility} />
      {visible && <Menu />}
    </S.MainNav>
  );
};
