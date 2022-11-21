import { useState, useEffect, useLayoutEffect } from "react";
interface gpsT {
  lat: number;
  lng: number;
}

const useMyGPSMAPLoding = () => {
  const [load, setLoad] = useState(false);
  const [myGPS, setMyGPS] = useState<gpsT>({
    lat: 36.658563176254795,
    lng: 127.86119616960151,
  });
  const [myAdress, setMyAdress] = useState("");

  useLayoutEffect(() => {
    currentPosition();
    isLoadKaKaoMap();
    kakao.maps.services && getAddr();
  }, [myGPS]);

  const isLoadKaKaoMap = () => {
    kakao.maps.load(function () {
      setLoad(true);
    });
  };

  const currentPosition = () => {
    navigator.geolocation.watchPosition((pos) => {
      setMyGPS((prev) => ({
        ...prev,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }));
    });
  };

  const getAddr = () => {
    let geocoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(myGPS.lat, myGPS.lng);
    let callback = function (result: any, status: string) {
      if (status === kakao.maps.services.Status.OK) {
        setMyAdress(result[0].address.region_3depth_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  return { myGPS, load, myAdress };
};
export default useMyGPSMAPLoding;
