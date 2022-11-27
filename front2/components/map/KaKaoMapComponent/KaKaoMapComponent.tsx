import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilValue, useRecoilState } from "recoil";
import useMyGPSMAPLoding from "util/hooks/useMyGPSMapLoding";
import { isOpenNav, searchKeyWord } from "store";
import RecommendPlaceMaker from "./RecommendPlaceMaker";
import { useEffect, useState } from "react";
import myLocaitionImg from "assets/myLocaition.png";
const KaKaoMapComponent = () => {
  // const [map, setMap] = useRecoilState(mapInfo);
  const [map, setMap] = useState();
  const searchKeyWordState = useRecoilValue(searchKeyWord);
  const { myGPS, load, markers } = useMyGPSMAPLoding(map, searchKeyWordState);
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
            <MapMarker
              position={myGPS}
              image={{
                src: "https://o.remove.bg/downloads/7edf40ec-2396-4c4f-87dc-d08890e41042/image-removebg-preview.png",
                size: {
                  width: 30,
                  height: 22,
                },
              }}
            ></MapMarker>
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
