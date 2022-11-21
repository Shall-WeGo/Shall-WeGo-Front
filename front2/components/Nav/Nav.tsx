import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isOpenNav } from "store";
import CloseBtn from "./CloseBtn";
import DarkModeBtn from "./DarkModeBtn";
import * as N from "./Nav.style";
import Search from "./Search";
const Nav = () => {
  const isOpenNavState = useRecoilValue(isOpenNav);
  return (
    <>
      {!isOpenNavState && (
        <N.NavContainer>
          <Search />

          <DarkModeBtn />
        </N.NavContainer>
      )}
      <CloseBtn />
    </>
  );
};

export default Nav;
