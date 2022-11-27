import { useState, useEffect, useLayoutEffect } from "react";

const useRecommendPlace = (markers: any) => {
  let makersAdressInfo: any = [];
  useEffect(() => {
    kakao.maps.services &&
      markers.forEach((value: any) => {
        getAddr(value);
      });
  });

  const getAddr = (value: any) => {
    let geocoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(value.position.lat, value.position.lng);
    let callback = function (result: any, status: string) {
      if (status === kakao.maps.services.Status.OK) {
        const infoData = {
          address: result[0].address.address_name,
          place_name: value.content,
          coordinate_x: value.position.lat,
          coordinate_y: value.position.lng,
        };
        makersAdressInfo.push(infoData);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };
  return makersAdressInfo;
};
export default useRecommendPlace;