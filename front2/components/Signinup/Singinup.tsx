import Image from "next/image";
import React from "react";
import * as S from "./Signinup.style";
import mapImg from "assets/Map.png";
import { useRouter } from "next/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Singinup = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <S.FormContainer>
        <S.TitleInputContainer>
          <S.Title>
            안녕하세요,
            <br />
            <span>한번가볼까</span>입니다
          </S.Title>
          {router.pathname == "/signin" ? <SignIn /> : <SignUp />}
        </S.TitleInputContainer>
        <S.ImgContainer>
          <Image width={520} height={520} src={mapImg}></Image>
        </S.ImgContainer>
        <S.GreenBackGround />
      </S.FormContainer>
    </>
  );
};

export default Singinup;
