import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilValue } from "recoil";
import useMyGPSMAPLoding from "util/hooks/useMyGPSMapLoding";
import { isOpenNav } from "store";
import RecommendPlaceMaker from "./RecommendPlaceMaker";
import { useEffect, useState } from "react";

const KaKaoMapComponent = () => {
  const [map, setMap] = useState<any>();
  const { myGPS, load, markers } = useMyGPSMAPLoding(map);
  const isOpenNavState = useRecoilValue(isOpenNav);

  return (
    <>
      {load && (
        <>
          <Map
            center={{ lat: myGPS.lat, lng: myGPS.lng }}
            style={{
              width: { isOpenNavState } ? "100%" : "80%",
              height: "100vh",
            }}
            level={3}
            onCreate={setMap}
          >
            {markers.map((value: any) => {
              return (
                <RecommendPlaceMaker
                  key={`${value.position.lat}-${value.position.lng}`}
                  position={value.position}
                  content={value.content}
                />
              );
            })}
          </Map>
        </>
      )}
    </>
  );
};

export default KaKaoMapComponent;
