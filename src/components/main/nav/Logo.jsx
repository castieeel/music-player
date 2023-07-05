import logo_dark from "../../../assets/img/logo_dark.png";
import logo_light from "../../../assets/img/logo_light.png";
import * as S from "./nav.styles";
import { useThemeContext } from "../../../contexts/theme";

export const Logo = () => {
  const { theme } = useThemeContext();
  console.log(theme.name);
  return (
    <S.NavLogo>
      <S.NavLogoImage
        src={theme.name === "dark" ? logo_dark : logo_light}
        alt="logo"
      ></S.NavLogoImage>
    </S.NavLogo>
  );
};
