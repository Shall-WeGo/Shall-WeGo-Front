import React, { useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Map = () => {
  const { kakao }: any = window;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 12,
      };
      const container = document.getElementById("myMap");
      const map = new kakao.maps.Map(container, options);
    });
  }, []);

  return <MapContainer id="myMap"></MapContainer>;
};

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Map;
