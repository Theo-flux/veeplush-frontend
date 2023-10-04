import veeplushApi from "../utils/axios";
import { handleApiError } from "../utils/handleApiError";
import { VEEPLUSH_URLS } from "../utils/backendUrls";
import { TGetCartResponse, TOrderItem } from "../types/global";

export const addToCart = async (payload: TOrderItem) => {
  try {
    const response = await veeplushApi.post(
      VEEPLUSH_URLS.CART.add_order,
      payload,
    );
    const status = response.status;

    return status;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getCartedOrders = async () => {
  try {
    const response = await veeplushApi.get(VEEPLUSH_URLS.CART.get_cart);
    const data: Array<TGetCartResponse> | [] = response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const deleteCartedItem = async (id: number) => {
  try {
    const response = await veeplushApi.delete(
      `${VEEPLUSH_URLS.CART.delete_item}/${id}`,
    );
    const data: string = response.data;

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
