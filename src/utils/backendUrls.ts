const env = import.meta.env.VITE_REACT_APP_NODE_ENV;

export const VEEPLUSH_URLS = {
  BASE_URL:
    env === "production"
      ? `${import.meta.env.VITE_REACT_APP_VEEPLUSH_PROD}`
      : env === "development"
      ? `${import.meta.env.VITE_REACT_APP_VEEPLUSH_DEV}`
      : "",

  CUSTOMER: {
    register: "customer/signup",
    login: "customer/login",
    me: "customer/me",
  },

  PRODUCT: {
    all: "product",
  },

  CART: {
    add_order: "cart/add_order_item",
    get_cart: "cart/customer_cart",
    delete_item: "cart/delete_item",
  },
};
