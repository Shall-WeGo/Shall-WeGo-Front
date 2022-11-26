import axios from "axios"
import config from "config/config.json"
export const request = () => {
    const request = axios.create({
      timeout: 10000,
      baseURL: config.server,
    });
    return request;
  };

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