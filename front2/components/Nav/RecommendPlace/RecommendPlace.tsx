import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { markersInfo } from "store";
import useRecommendPlaceAdress from "./hooks/useRecommendPlaceAdress";
const RecommendPlace = () => {
  const markers = useRecoilValue(markersInfo);
  const makersAdressInfo = useRecommendPlaceAdress(markers);
  
  return <div></div>;
};

export default RecommendPlace;
