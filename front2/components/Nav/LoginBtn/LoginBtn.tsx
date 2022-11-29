import Link from "next/link";
import { useEffect } from "react";
import * as L from "./LoginBtn.style";
const LoginBtn = () => {
  let token;

  useEffect(() => {
    token = Boolean(localStorage.getItem("access_token"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("access_token");
  };
  return (
    <L.Button>
      {token ? (
        <p onClick={logOut}>로그아웃</p>
      ) : (
        <Link href={"/signin"}>로그인</Link>
      )}
    </L.Button>
  );
};

export default LoginBtn;
