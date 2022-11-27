import { useState, useEffect, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { markersInfo, myAdressAtom } from "store";
interface gpsT {
  lat: number;
  lng: number;
}

const useMyGPSMAPLoding = (map: any, searchKeyWord: string) => {
  // const map = useRecoilValue(mapInfo);
  const [load, setLoad] = useState(false);
  const [myGPS, setMyGPS] = useState<gpsT>({ lat: 0, lng: 0 });
  const [myAdress, setMyAdress] = useRecoilState(myAdressAtom);
  const [markers, setMarkers] = useRecoilState(markersInfo);

  useEffect(() => {
    isLoadKaKaoMap();
    console.log(!!searchKeyWord);
    if (searchKeyWord) return;
    currentPosition();
  }, [searchKeyWord]);

  useEffect(() => {
    kakao.maps.services && getAddr();
  });

  useEffect(() => {
    console.log(myAdress);
    useRecommendMarker();
  }, [myAdress, searchKeyWord]);
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
        setMyAdress(
          result[0].address.region_1depth_name +
            result[0].address.region_2depth_name +
            result[0].address.region_3depth_name
        );
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const useRecommendMarker = () => {
    if (!kakao.maps.services) return;
    const ps = new kakao.maps.services.Places();
    myAdress &&
      ps.keywordSearch(
        searchKeyWord ? searchKeyWord : myAdress,
        (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();
            let marker = [];
            for (var i = 0; i < data.length; i++) {
              // @ts-
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
        }
      );
    return markers;
  };

  return { myGPS, load, markers };
};
export default useMyGPSMAPLoding;
