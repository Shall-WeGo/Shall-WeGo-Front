import React from "react";
import Header from "./header";
import usePlaceInfoData from "./hooks/usePlaceInfoData";
import PlaceInfo from "./PlaceInfo";
import * as R from "./ReviewComponent.style";
import ReviewInput from "./ReviewInput";
import ShowReview from "./ShowReview";
const ReviewComponent = () => {
  return (
    <R.ReviewContainer>
      <Header />
      {/* <PlaceInfo /> */}
      <ReviewInput />
      <ShowReview />
    </R.ReviewContainer>
  );
};

export default ReviewComponent;
