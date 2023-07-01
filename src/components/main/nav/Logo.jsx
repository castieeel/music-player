import logo_dark from "../../../assets/img/logo_dark.png";
import logo_light from "../../../assets/img/logo_light.png";
import * as S from "./nav.styles";
import { ThemeContext } from "../../../contexts/theme";

export const Logo = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <S.NavLogo>
          <S.NavLogoImage
            src={theme === "dark" ? logo_dark : logo_light}
            alt="logo"
          ></S.NavLogoImage>
        </S.NavLogo>
      )}
    </ThemeContext.Consumer>
  );
};
