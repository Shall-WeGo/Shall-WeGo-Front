import SaveGreen from "assets/SaveGreen";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { customAxios, getRequestWithAccessToken } from "util/api/customAxios";
import useSaveListData from "./hooks/useSaveListData";
const SaveList = () => {
  const saveList = useSaveListData();
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setToken(token);
  }, []);
  const onClickDelete = () => {
    const request = getRequestWithAccessToken(token);
    request.delete("/locations?address-id=3");
  };
  return (
    <Container>
      <h1>CU 구지예다음점</h1>
      <div onClick={() => onClickDelete()}>
        <SaveGreen />
      </div>
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
