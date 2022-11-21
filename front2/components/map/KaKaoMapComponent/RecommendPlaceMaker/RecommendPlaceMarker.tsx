import useRecommendMarker from "hooks/useRecommendMarker";
import React, { useEffect } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
const RecommendPlaceMarker = ({ map, myAdress }: any) => {
  const markers = useRecommendMarker(map, myAdress);
  console.log(markers);
  return (
    <>
      {markers.map((marker: any) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          //   onClick={() => setInfo(marker)}
        >
          {/* {info && info.content === marker.content && (
            <div style={{ color: "#000" }}>{marker.content}</div>
          )} */}
        </MapMarker>
      ))}
    </>
  );
};

export default RecommendPlaceMarker;
