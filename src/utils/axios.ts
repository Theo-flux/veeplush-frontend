import axios from "axios";
import { getToken, removeToken } from "../helpers/authTokens";

const env = import.meta.env.VITE_REACT_APP_NODE_ENV;

const veeplushApi = axios.create({
  baseURL:
    env === "production"
      ? `${import.meta.env.VITE_REACT_APP_DEFABS_PROD}`
      : env === "development"
      ? `${import.meta.env.VITE_REACT_APP_DEFABS_DEV}`
      : "",
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
        window.location.replace("/login");
        removeToken();
      }
    }
    return Promise.reject(error);
  },
);

export default veeplushApi;
