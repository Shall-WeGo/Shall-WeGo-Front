import useMyLatLng from "hooks/kakaoMap/useMyLatLng";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";
import { useEffect, useLayoutEffect } from "react";
const KakaoMap = () => {
  const currentPosition = useMyLatLng();
  // useEffect(() => {

  //   console.log(currentPosition);
  // }, []);

  return (
    <>
      {/* new kakao.maps.LatLng(); */}
      <Map
        // center={{ lat: currentPosition.lat, lng: currentPosition.lng }}
        center={{ lat: 37.3004755, lng: 127.034374 }}
        style={{ width: "100%", height: "500px" }}
        level={3}
      />
    </>
  );
};

export default KakaoMap;
