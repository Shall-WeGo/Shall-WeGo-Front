import Link from "next/link";
import React, { useState } from "react";
import { signInPost } from "util/api/auth";
import * as S from "./SignIn.style";
const SignIn = () => {
  const [password, setPassword] = useState<string>("");
  const [id, setId] = useState<string>("");

  const onClickSignin = () => {
    signInPost(id, password);
  };
  return (
    <S.InputContainer>
      <S.InputDiv>
        <S.Input
          placeholder="아이디를 입력해 주세요"
          onChange={(e) => setId(e.target.value)}
        ></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => setPassword(e.target.value)}
        ></S.Input>
      </S.InputDiv>
      <S.LoginButton onClick={onClickSignin}>로그인</S.LoginButton>
      <S.ATagContainer>
        <Link href="/signup">회원가입</Link> <Link href="/">| 홈</Link>
      </S.ATagContainer>
    </S.InputContainer>
  );
};

export default SignIn;
