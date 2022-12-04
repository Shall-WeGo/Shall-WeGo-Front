import Save from "assets/Save";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { markersInfo, placeInfo } from "store";
import { customAxios, getRequestWithAccessToken } from "util/api/customAxios";
import useRecommendPlaceAdress from "../../../util/hooks/useRecommendPlaceAdress";
import NearSearch from "./NearSearch";

import * as R from "./Recommend.style";
const RecommendPlace = () => {
  const markers = useRecoilValue(markersInfo);
  const makersAdressInfo = useRecommendPlaceAdress(markers);
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    setToken(localStorage?.getItem("access_token"));
  }, []);

  const onClickSave = (i: number) => {
    if (token) {
      console.log(makersAdressInfo);
      const request = getRequestWithAccessToken(token);
      request.post("/locations", {
        address: makersAdressInfo[i]?.address,
        place_name: makersAdressInfo[i]?.place_name,
        coordinate_x: makersAdressInfo[i]?.coordinate_x,
        coordinate_y: makersAdressInfo[i]?.coordinate_y,
      });
    }
  };

  return (
    <>
      <NearSearch />
      <R.Container>
        {makersAdressInfo &&
          markers.map((value: any, i) => {
            return (
              <R.PlaceButtonContainer key={value.position.lat}>
                <R.PlaceContainer>{value.content}</R.PlaceContainer>
                <R.SaveContainer>
                  <R.SaveSVG onClick={() => onClickSave(i)}>
                    <Save />
                  </R.SaveSVG>
                  <Link href={`/review/${makersAdressInfo[i]?.address}`}>
                    리뷰
                  </Link>
                </R.SaveContainer>
              </R.PlaceButtonContainer>
            );
          })}
      </R.Container>
    </>
  );
};

export default RecommendPlace;
