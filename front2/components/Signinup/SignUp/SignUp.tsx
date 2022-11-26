import Link from "next/link";
import { useRef, useState } from "react";
import * as S from "./SignUp.style";
const SignUp = () => {
  const idRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>();
  const [checkPassword, setCehckPassword] = useState<string>();
  return (
    <S.InputContainer>
      <S.InputDiv>
        <S.Input placeholder="아이디를 입력해 주세요" ref={idRef}></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => setPassword(e.target.value)}
        ></S.Input>
      </S.InputDiv>
      <S.InputDiv>
        <S.Input
          placeholder="비밀번호를 다시 입력해 주세요"
          onChange={(e) => setCehckPassword(e.target.value)}
        ></S.Input>
      </S.InputDiv>
      {/* {password != setPassword && <S.checkPw>비밀번호가 다릅니다</S.checkPw>} */}
      <S.LoginButton>회원가입</S.LoginButton>
      <S.ATagContainer>
        <Link href="/signin">로그인</Link>
        <Link href="/signin">| 홈</Link>
      </S.ATagContainer>
    </S.InputContainer>
  );
};

export default SignUp;
