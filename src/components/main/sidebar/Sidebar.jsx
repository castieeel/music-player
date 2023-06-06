import { Personal } from "./Personal";
import { Block } from "./Block";
import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.Siderbar>
      <Personal />
      <Block />
    </S.Siderbar>
  );
};
