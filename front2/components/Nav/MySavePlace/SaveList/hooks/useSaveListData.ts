import axios from "axios";
import { useEffect, useState } from "react";
import { DrawingManager } from "react-kakao-maps-sdk";
import { getRequestWithAccessToken } from "util/api/customAxios";

const useSaveListData = () => {
  const [listData, setListData] = useState();
  const [token, setToken] = useState("");
  const [isdelete, isSetDelete] = useState(true);

  useEffect(() => {
    console.log(listData);
  });
  useEffect(() => {
    console.log("실행");
    fetchData();
  }, [isdelete]);

    const token = localStorage.getItem("access_token");
    setToken(token);
  }, []);

  const fetchData = async () => {
    console.log(1);

    const token = localStorage.getItem("access_token");
    if (!token) return;
    const data = await axios.get(`http://141.164.59.254:8080/locations`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/octet-stream",
      },
    });
    setListData(data);
  };

  //   const onClickDelete = async (id: number) => {
  //     const request = getRequestWithAccessToken(token);
  //     request.delete(`/locations?address-id=${id}`);
  //     isSetDelete((prev) => !prev);
  //   };

  return { listData, isSetDelete };
};
export default useSaveListData;
