import { NextPage } from "next";
import KakaoMap from "components/map/KakaoMap";
import Script from "next/script";
const map: NextPage = () => {
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
        async
      />
      <KakaoMap />
    </>
  );
};

export default map;
