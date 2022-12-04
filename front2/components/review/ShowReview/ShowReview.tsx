import Icon from "assets/Icon";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { customAxios, getRequestWithAccessToken } from "util/api/customAxios";
import * as S from "./ShowReview.style";
const ShowReview = () => {
  //   const data = [
  //     {
  //       rate: 4,
  //       writer: "배",
  //       review_message: "1",
  //     },
  //     {
  //       rate: 3,
  //       writer: "배진",
  //       review_message: "1",
  //     },
  //     {
  //       rate: 5,
  //       writer: "배영",
  //       review_message: "12",
  //     },
  //   ];
  const [userName, setUserName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [data, setData] = useState();
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setToken(token);
    const placeName = router.query.address;
    setPlaceName(placeName);
    setUserName(localStorage.getItem("username"));
  });

  useEffect(() => {
    console.log("pl", placeName, Boolean(placeName));
    if (!placeName) return;
    fetchData();
  }, [placeName]);

  const fetchData = async () => {
    const result = await customAxios.get(`/reviews/${placeName}`);
    console.log("resylt", result);
    setData(result);
  };

  const onClickDelete = async () => {
    const request = getRequestWithAccessToken(token);
    await request.delete(`/locations?address=${placeName}`);
  };
  return (
    <S.ShowReviewContainer>
      {data && (
        <S.ReviewTitle>
          리뷰<S.ReviewLen>{data.data.length}</S.ReviewLen>
        </S.ReviewTitle>
      )}
      {data &&
        data.data.map((value) => {
          console.log(data);
          return (
            <S.ReviewItem>
              <Icon />
              <h1>{value.writer} </h1>
              <p>{value.review_message}</p>
              {/* {userName == value.writer && (
                <S.DeleteBtn onClick={() => onClickDelete()}>삭제</S.DeleteBtn>
              )} */}
            </S.ReviewItem>
          );
        })}
    </S.ShowReviewContainer>
  );
};

export default ShowReview;
