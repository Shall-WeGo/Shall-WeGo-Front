import type { GetServerSideProps, NextPage } from "next";
import Script from "next/script";
import KakaoMap from "components/map/KakaoMap";
import Nav from "components/Nav";
import styled from "styled-components";
import { getRequestWithAccessToken } from "util/api/customAxios";
const Home: NextPage = () => {
  return (
    <Container>
      <Nav/>
      <KakaoMap />
    </Container>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
 
//  const token = localStorage.getItem("")
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   const request = getRequestWithAccessToken(token);
//   //pageProps로 넘길 데이터 
//   return { props: { data: data } }
// }

export default Home;

const Container = styled.div`
  display:flex
`
