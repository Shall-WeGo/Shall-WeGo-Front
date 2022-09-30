import { useEffect, useLayoutEffect } from "react";

const useMyLatLng = () => {
  const myLocaition = { lat: 0, lng: 0 };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      (myLocaition.lat = pos.coords.latitude),
        (myLocaition.lng = pos.coords.longitude);
    });
  }, []);
  return myLocaition;
};

export default useMyLatLng;
