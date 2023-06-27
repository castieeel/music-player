import { Personal } from "./Personal";
import { Block } from "./Block";
import * as S from "./_sidebar.styles";

export const Sidebar = () => {
  return (
    <S.Siderbar>
      <Personal />
      <Block />
    </S.Siderbar>
  );
};
