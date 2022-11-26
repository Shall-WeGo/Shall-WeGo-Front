import { useState, useEffect, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import { markersInfo } from "store";
interface gpsT {
  lat: number;
  lng: number;
}

const useMyGPSMAPLoding = (map: any) => {
  const [load, setLoad] = useState(false);
  const [myGPS, setMyGPS] = useState<gpsT>({ lat: 0, lng: 0 });
  const [myAdress, setMyAdress] = useState("");
  const [markers, setMarkers] = useRecoilState(markersInfo);

  useEffect(() => {
    currentPosition();
    isLoadKaKaoMap();
  }, []);

  useEffect(() => {
    kakao.maps.services && getAddr();
  });

  useEffect(() => {
    useRecommendMarker();
    console.log("mk", markers);
  }, [myAdress]);
  const isLoadKaKaoMap = () => {
    kakao.maps.load(function () {
      setLoad(true);
    });
  };

  const currentPosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
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

  const useRecommendMarker = () => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    myAdress &&
      ps.keywordSearch(myAdress, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let marker = [];
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            marker.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(marker);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
    return markers;
  };

  return { myGPS, load, markers };
};
export default useMyGPSMAPLoding;
