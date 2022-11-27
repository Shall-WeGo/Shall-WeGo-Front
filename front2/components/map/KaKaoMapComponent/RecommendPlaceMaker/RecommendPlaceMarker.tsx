import React, { useEffect, useState } from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
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
        {isVisible && <MarkerContent>{content}</MarkerContent>}
      </MapMarker>
    </>
  );
};

export default RecommendPlaceMarker;

const MarkerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding: 10px; */
  width: 200px;
  height: 30px;
  border: none;
`;
