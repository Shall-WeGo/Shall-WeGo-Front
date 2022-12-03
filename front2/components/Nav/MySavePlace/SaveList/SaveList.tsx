import { useEffect } from "react";
import styled from "styled-components";
import { getRequestWithAccessToken } from "util/api/customAxios";
import useSaveListData from "./hooks/useSaveListData";
const SaveList = () => {
  const saveList = useSaveListData();
  return (
    <Container>
      <h1>CU 구지예다음점</h1>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="33"
          height="33"
          rx="7.5"
          stroke="#EEEEEE"
        />
        <path
          d="M20.75 10.25H13.25C12.425 10.25 11.7575 10.925 11.7575 11.75L11.75 23.75L17 21.5L22.25 23.75V11.75C22.25 10.925 21.575 10.25 20.75 10.25Z"
          fill="#5FC970"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 374px;
  height: 54px;

  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
`;

export default SaveList;
