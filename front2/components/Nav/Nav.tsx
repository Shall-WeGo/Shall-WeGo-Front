import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isOpenNav, isSelectSearch } from "store";
import CloseBtn from "./CloseBtn";
import DarkModeBtn from "./DarkModeBtn";
import LoginBtn from "./LoginBtn";
import MySavePlace from "./MySavePlace";
import * as N from "./Nav.style";
import RecommendPlace from "./RecommendPlace";
import Search from "./Search";
const Nav = () => {
  const isOpenNavState = useRecoilValue(isOpenNav);
  const isSelectSearchBtn = useRecoilValue(isSelectSearch);
  return (
    <>
      <LoginBtn />
      {!isOpenNavState && (
        <N.NavContainer>
          <Search />
          {/* <DarkModeBtn /> */}
          {isSelectSearchBtn ? <RecommendPlace /> : <MySavePlace />}
        </N.NavContainer>
      )}
      <CloseBtn />
    </>
  );
};

export default Nav;
