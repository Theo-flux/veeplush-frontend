import axios from "axios";
import { handleApiError } from "../utils/handleApiError";
import { VEEPLUSH_URLS } from "../utils/backendUrls";
import { TProducts } from "../types/global";

const Instance = axios.create({
  baseURL: VEEPLUSH_URLS.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export const allProducts = async () => {
  try {
    const response = await Instance.get(VEEPLUSH_URLS.PRODUCT.all);
    const data: Array<TProducts> = await response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const productById = async (payload: { id: number }) => {
  try {
    const response = await Instance.get(
      `${VEEPLUSH_URLS.PRODUCT.all}/${payload.id}`,
    );
    const data: TProducts = await response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
