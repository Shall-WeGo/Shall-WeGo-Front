import MiniLogo from "assets/miniLogo";
import { useRouter } from "next/router";
import React from "react";
import { customAxios } from "util/api/customAxios";
import * as H from "./Header.style";
const Header = () => {
  const router = useRouter();
  const placeName = router.query.address;
  return (
    <H.HeaderComponent>
      <H.LogoContainer>
        <MiniLogo />
        <p>한번가볼까</p>
      </H.LogoContainer>
      <h1>{placeName}</h1>
    </H.HeaderComponent>
  );
};

export default Header;
