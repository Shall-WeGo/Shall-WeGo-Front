import type { NextPage } from "next";
import Script from "next/script";
import KakaoMap from "components/map/KakaoMap";
const Home: NextPage = () => {
  return (
    <>
      <KakaoMap />
    </>
  );
};

export default Home;
