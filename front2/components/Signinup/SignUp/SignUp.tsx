import Link from "next/link";
import { useRef, useState } from "react";
import { signUpPost } from "util/api/auth";
import * as S from "./SignUp.style";
const SignUp = () => {
  const idRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCehckPassword] = useState<string>("");

  const onClickSignUp = () => {
    if (password != checkPassword) return;
    signUpPost(idRef?.current?.value, password);
  };

  return (
    <S.InputContainer>
      <S.InputDiv>
        <S.Input placeholder="아이디를 입력해 주세요" ref={idRef}></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => setPassword(e.target.value)}
        ></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요"
          onChange={(e) => setCehckPassword(e.target.value)}
        ></S.Input>
        {password != checkPassword && (
          <S.checkPw>비밀번호가 다릅니다</S.checkPw>
        )}
      </S.InputDiv>
      <S.LoginButton onClick={onClickSignUp}>회원가입</S.LoginButton>
      <S.ATagContainer>
        <Link href="/signin">로그인</Link>
        <Link href="/">| 홈</Link>
      </S.ATagContainer>
    </S.InputContainer>
  );
};

export default SignUp;
