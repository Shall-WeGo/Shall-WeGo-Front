import { MapMarker } from "react-kakao-maps-sdk";
interface markerProps {
  lat: number;
  lng: number;
  imageUrl: string;
}
const KaKaoMarker = ({ lat, lng, imageUrl }: markerProps) => {
  return (
    <MapMarker // 마커를 생성합니다
      position={{
        // 마커가 표시될 위치입니다
        lat: lat,
        lng: lng,
      }}
      image={{
        src: `${imageUrl}`, // 마커이미지의 주소입니다
        size: {
          width: 64,
          height: 69,
        }, // 마커이미지의 크기입니다
        options: {
          offset: {
            x: 0,
            y: 0,
          }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        },
      }}
    />
  );
};

export default KaKaoMarker;
