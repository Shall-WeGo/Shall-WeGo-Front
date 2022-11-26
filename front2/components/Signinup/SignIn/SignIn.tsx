import Link from "next/link";
import React from "react";
import * as S from "./SignIn.style";
const SignIn = () => {
  return (
    <S.InputContainer>
      <S.InputDiv>
        <S.Input placeholder="아이디를 입력해 주세요"></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input placeholder="비밀번호를 입력해 주세요"></S.Input>
      </S.InputDiv>
      <S.LoginButton>로그인</S.LoginButton>
      <S.ATagContainer>
        <Link href="/signup">회원가입</Link> <Link href="/">| 홈</Link>
      </S.ATagContainer>
    </S.InputContainer>
  );
};

export default SignIn;
