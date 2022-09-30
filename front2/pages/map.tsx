import { NextPage } from "next";
import KakaoMap from "components/map/KakaoMap";
import Script from "next/script";
const map: NextPage = () => {
  return (
    <>
      <KakaoMap />
    </>
  );
};

export default map;
