import styled from "styled-components";

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BurgerLine = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.color};
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const NavLogoImage = styled.img`
  width: 113.33px;
  height: 17px;
`;

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const NavMenuList = styled.ul`
  padding: 18px 0 10px 0;
`;
export const NavMenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;
export const NavMenuLink = styled.p`
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const MainNav = styled.nav`
  width: 244px;
  background-color: ${(props) => props.theme.navBackgroundColor};
  padding: 20px 0 20px 36px;
`;

export const BtnThemeSvg = styled.div`
  margin-top: 25px;
  width: 40px;
  height: 40px;
`;
