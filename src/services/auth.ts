import veeplushApi from "../utils/axios";
import { handleApiError } from "../utils/handleApiError";
import { VEEPLUSH_URLS } from "../utils/backendUrls";
import { setToken } from "../helpers/authTokens";
import {
  TCustomerLogin,
  TCustomerRegister,
  TCustomerResponse,
  TLoginToken,
} from "../types/global";

export const registerCustomer = async (payload: TCustomerRegister) => {
  try {
    const response = await veeplushApi.post(
      VEEPLUSH_URLS.CUSTOMER.register,
      payload,
    );
    const data: TCustomerRegister = response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const loginCustomer = async (payload: TCustomerLogin) => {
  try {
    const response = await veeplushApi.post(
      VEEPLUSH_URLS.CUSTOMER.login,
      payload,
    );

    const data: TLoginToken = await response.data;
    setToken(data.access_token);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const thisCustomer = async () => {
  try {
    const response = await veeplushApi.get(VEEPLUSH_URLS.CUSTOMER.me);
    const data: TCustomerResponse = await response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
