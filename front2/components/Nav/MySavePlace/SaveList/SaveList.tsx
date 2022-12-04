import SaveGreen from "assets/SaveGreen";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { customAxios, getRequestWithAccessToken } from "util/api/customAxios";
import useSaveListData from "./hooks/useSaveListData";
const SaveList = () => {
  const { listData, isSetDelete } = useSaveListData();
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setToken(token);
  }, []);

  const onClickDelete = async (id: number) => {
    const request = getRequestWithAccessToken(token);
    await request.delete(`/locations?address-id=${id}`);
    isSetDelete((prev) => !prev);
    // location.reload();
  };
  return (
    <>
      {listData &&
        listData.data.map((value) => {
          return (
            <Container>
              <PlaceContainer>
                <h1>{value.place_name}</h1>
                <p>{value.address}</p>
              </PlaceContainer>
              <div onClick={() => onClickDelete(value.id)}>
                <SaveGreen />
              </div>
            </Container>
          );
        })}
    </>
  );
};

const Container = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 374px;
  height: 54px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.0024em;

    color: #a6a6a6;
  }
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
`;

export const PlaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export default SaveList;
