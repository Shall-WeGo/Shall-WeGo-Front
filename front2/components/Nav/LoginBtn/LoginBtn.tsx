import Link from "next/link";
import * as L from "./LoginBtn.style";
const LoginBtn = () => {
  return (
    <L.Button>
      <Link href={"/signin"}>로그인</Link>
    </L.Button>
  );
};

export default LoginBtn;
