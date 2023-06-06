import logo from "../../../assets/img/logo.png";
import * as S from "./_nav.styles";

export const Logo = () => {
  return (
    <S.NavLogo>
      <S.NavLogoImage src={logo} alt="logo"></S.NavLogoImage>
    </S.NavLogo>
  );
};
