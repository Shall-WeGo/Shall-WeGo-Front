import Image from "next/image";
import * as L from "./NotLogin.style";
import NotLoginImg from "assets/Group.png";
import cloud from "assets/cloud.png";
import Link from "next/link";
const NotLogin = () => {
  return (
    <L.Container>
      <Image width={318} height={55} src={cloud}></Image>
      <L.TextLoginContainer>
        <L.Text>
          로그인하고 <br />더 많은 서비스를 이용해 보세요
        </L.Text>
        <L.LoginBtn>
          <Link href={"/signin"}>로그인</Link>
        </L.LoginBtn>
      </L.TextLoginContainer>
      <Image width={333} height={300} src={NotLoginImg}></Image>
    </L.Container>
  );
};

export default NotLogin;
