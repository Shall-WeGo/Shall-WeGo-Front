import Save from "assets/Save";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { markersInfo } from "store";
import { customAxios } from "util/api/customAxios";
import useRecommendPlaceAdress from "../../../util/hooks/useRecommendPlaceAdress";
import NearSearch from "./NearSearch";

import * as R from "./Recommend.style";
const RecommendPlace = () => {
  const markers = useRecoilValue(markersInfo);
  useEffect(() => {
    console.log(markers);
  });
  const makersAdressInfo = useRecommendPlaceAdress(markers);
  // if (typeof window !== "undefined") {
  //   const token = localStorage.getItem("access_token");
  // }
  useEffect(() => {
    console.log(makersAdressInfo);
  });

  // const onClickSave = (i: number) => {
  //   customAxios.post(
  //     "/locations",
  //     {
  //       address: makersAdressInfo[i]?.adress,
  //       place_name: makersAdressInfo[i]?.palce_name,
  //       coordinate_x: makersAdressInfo[i]?.coordinate_x,
  //       coordinate_y: makersAdressInfo[i]?.coordinate_y,
  //     },
  //     { header: { Authorization: `Bearer ${token}` } }
  //   );
  // };
  return (
    <>
      <NearSearch />
      <R.Container>
        {markers.map((value: any, i) => {
          return (
            <R.PlaceButtonContainer>
              <R.PlaceContainer>{value.content}</R.PlaceContainer>
              <R.SaveContainer>
                <R.SaveSVG>
                  <Save />
                </R.SaveSVG>
                <Link href={`/reviews/${value.position.lat}`}>리뷰</Link>
              </R.SaveContainer>
            </R.PlaceButtonContainer>
          );
        })}
      </R.Container>
    </>
  );
};

export default RecommendPlace;
