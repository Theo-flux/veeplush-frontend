import axios from "axios";
import { VEEPLUSH_URLS } from "./backendUrls";
import { getToken, removeToken } from "../helpers/authTokens";

const veeplushApi = axios.create({
  baseURL: VEEPLUSH_URLS.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

veeplushApi.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

veeplushApi.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (error.response) {
      if ([401].includes(error.response.status)) {
        // window.location.replace("/login");
        removeToken();
      }
    }
    return Promise.reject(error);
  },
);

export default veeplushApi;
