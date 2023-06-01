import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import React from "react";
const { useState } = React;

export const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <nav className="main__nav nav">
      <Logo />
      <Burger onClick={toggleVisibility} />
      {visible && <Menu />}
    </nav>
  );
};
