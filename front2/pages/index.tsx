import type { NextPage } from "next";
import Script from "next/script";
import KakaoMap from "components/map/KakaoMap";
import Nav from "components/Nav";
import styled from "styled-components";
const Home: NextPage = () => {
  return (
    <Container>
      <Nav/>
      <KakaoMap />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display:flex
`