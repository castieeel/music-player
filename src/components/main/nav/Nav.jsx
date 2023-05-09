import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
export const Nav = () => {
  return (
    <nav class="main__nav nav">
      <Logo />
      <Burger />
      <Menu />
    </nav>
  );
};
