import styled from "styled-components";

export const ReviewInputContainer = styled.div`
  z-index: 0;
  margin: 0 auto;
  width: 800px;
  height: 217px;
  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  width: 420px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  input {
    width: 410px;
    border: none;
    outline: none;
    height: 98%;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  cursor: pointer;
  width: 48px;
  height: 48px;
`;

export const StarReviewContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ReviewBtn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 56px;
  margin-left: 10px;
  background: #5fc970;
  border: 1px solid #dbdbdb;
`;

export const InputBtnContainer = styled.div`
  display: flex;
`;
