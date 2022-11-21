import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilValue } from "recoil";
import useMyGPSMAPLoding from "hooks/useMyGPSMapLoding";
import { isOpenNav } from "store";
import KaKaoMapComponent from "./KaKaoMapComponent";

const KakaoMap = () => {
  return (
    <>
      <KaKaoMapComponent />
    </>
  );
};

export default KakaoMap;
