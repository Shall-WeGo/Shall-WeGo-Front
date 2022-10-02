import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";
import { useEffect, useLayoutEffect, useState } from "react";

interface gpsT {
  lat: number;
  lng: number;
}
const KakaoMap = () => {
  const [load, setLoad] = useState(false);
  const [myGPS, setMyGPS] = useState<gpsT>({
    lat: 36.658563176254795,
    lng: 127.86119616960151,
  });
  useEffect(() => {
    kakao.maps.load(function () {
      setLoad(true);
    });
    navigator.geolocation.getCurrentPosition((pos) => {
      setMyGPS((prev) => ({
        ...prev,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }));
    });
  }, []);

  return (
    <>
      {load && (
        <Map
          center={{ lat: myGPS.lat, lng: myGPS.lng }}
          style={{ width: "100%", height: "100vh" }}
          level={3}
        />
      )}
    </>
  );
};

export default KakaoMap;
