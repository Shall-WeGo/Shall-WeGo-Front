import Icon from "assets/Icon";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { customAxios } from "util/api/customAxios";
import * as S from "./ShowReview.style";
const ShowReview = () => {
  const data = [
    {
      rate: 4,
      writer: "배",
      review_message: "1",
    },
    {
      rate: 3,
      writer: "배진",
      review_message: "1",
    },
    {
      rate: 5,
      writer: "배영",
      review_message: "12",
    },
  ];
  useEffect(() => {
    // fetchData();
  }, []);
  const router = useRouter();
  const placeName = router.query.address;
  const fetchData = async () => {
    const result = await customAxios.get(`/reviews/${placeName}`);
    console.log(result);
  };
  return (
    <S.ShowReviewContainer>
      <S.ReviewTitle>
        리뷰<S.ReviewLen>{data.length}</S.ReviewLen>
      </S.ReviewTitle>
      {data.map((value) => {
        return (
          <S.ReviewItem>
            <Icon />
            <h1>{value.writer} </h1>
            <p>{value.review_message}</p>
          </S.ReviewItem>
        );
      })}
    </S.ShowReviewContainer>
  );
};

export default ShowReview;
