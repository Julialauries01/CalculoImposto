'use client'

import React from "react";
import {
  Main,
} from "./styles";

import MainUser from "../MainUser";

const MainAdm = () => {
  return (
    <Main>
          <MainUser sublineState={false} containerResume={false} containerPlus={true} isAdmUser={true} />
    </Main>
  );
};

export default MainAdm;
