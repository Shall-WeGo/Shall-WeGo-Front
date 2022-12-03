import styled from "styled-components";
export const ShowReviewContainer = styled.div`
  width: 800px;
  height: 545px;
  margin: 10px auto;
  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewTitle = styled.h1`
  margin-top: 40px;
  display: flex;
  width: 78%;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.0024em;

  color: #1f1f1f;
`;
export const ReviewItem = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 85px;
  border-bottom: 1px solid #eeeeee;
  h1 {
    margin-left: 10px;
  }
`;
export const ReviewLen = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.0024em;

  color: #5fc970;
`;
