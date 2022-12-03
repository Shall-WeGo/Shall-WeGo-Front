import axios from "axios";
import config from "config/config.json";
export const customAxios = axios.create({
  baseURL: config.server,
  timeout: 10000,
});

export const getRequestWithAccessToken = (token: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: config.server,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request;
};
