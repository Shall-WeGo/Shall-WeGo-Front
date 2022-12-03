import { useEffect, useState } from "react";
import { getRequestWithAccessToken } from "util/api/customAxios";

const useSaveListData = () => {
  const [listData, setListData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    const request = getRequestWithAccessToken(token);
    const saveList = await request.get("/locations");
    setListData(saveList);
    console.log("1", saveList);
  };
  return listData;
};
export default useSaveListData;
