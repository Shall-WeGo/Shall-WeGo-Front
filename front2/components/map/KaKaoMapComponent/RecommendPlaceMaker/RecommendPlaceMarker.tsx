import React, { useEffect, useState } from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";

interface propsType {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}
const RecommendPlaceMarker = ({ position, content }: propsType) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState<Boolean>();
  return (
    <>
      <MapMarker
        position={position}
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    </>
  );
};

export default RecommendPlaceMarker;
