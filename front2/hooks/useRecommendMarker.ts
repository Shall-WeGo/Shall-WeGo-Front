import { useState, useEffect } from "react";

const useRecommendMarker = (map: any, myAdress: any) => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState<any>([]);
  //   const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    console.log(myAdress);
    myAdress &&
      ps.keywordSearch(myAdress, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];
          console.log("d", data);
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
  }, [map, myAdress]);
  return markers;
};
export default useRecommendMarker;
