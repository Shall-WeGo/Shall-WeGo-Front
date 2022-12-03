import ColorStar from "assets/ColorStar";
import NotColorStar from "assets/NotColorStar";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { getRequestWithAccessToken } from "util/api/customAxios";
import * as R from "./ReviewInput.style";
const ReviewInput = () => {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [score, setScore] = useState(0);
  const [token, setToken] = useState("");
  const router = useRouter();
  const placeName = router.query.address;

  const inputRef = useRef();
  const onClickStar = (i: number) => {
    let exstar = [false, false, false, false, false];
    for (let j = 0; j <= i; j++) {
      exstar[j] = true;
    }
    setScore(i + 1);
    setStar(exstar);
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setToken(token);
  }, []);
  const onCliclReview = async () => {
    const message = inputRef.current.value;
    const request = getRequestWithAccessToken(token);
    try {
      const result = request.post("/reviews", {
        location: placeName,
        rate: score,
        review_message: message,
      });
      //   location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <R.ReviewInputContainer>
      <h3> 리뷰를 남겨주세요</h3>
      <R.StarReviewContainer>
        {star.map((value, i) => {
          return value ? (
            <R.StarContainer onClick={() => onClickStar(i)}>
              <ColorStar />
            </R.StarContainer>
          ) : (
            <R.StarContainer onClick={() => onClickStar(i)}>
              <NotColorStar />
            </R.StarContainer>
          );
        })}
      </R.StarReviewContainer>
      <R.InputBtnContainer>
        <R.InputDiv>
          <input
            ref={inputRef}
            placeholder="간단한 한 줄 리뷰를 남겨주세요"
            type="text"
          />
        </R.InputDiv>
        <R.ReviewBtn onClick={() => onCliclReview()}>리뷰</R.ReviewBtn>
      </R.InputBtnContainer>
    </R.ReviewInputContainer>
  );
};

export default ReviewInput;
