import { Nav } from "./nav/Nav";
import { Centerblock } from "./centerblock/Centerblock";
import { Sidebar } from "./sidebar/Sidebar";
import React from "react";
import * as S from "./main.styles";

export const Main = () => {
  return (
    <S.Main>
      <Nav />
      <Centerblock />
      <Sidebar />
    </S.Main>
  );
};
