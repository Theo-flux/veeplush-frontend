import {
  TCustomerInfo,
  TCustomerRegister,
  TLoginForm,
  TOrderItem,
} from "../types/global";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneNumberPattern = /^0[789][01][0-9]{8}$/;

const isValidPhoneNumber = (phone_number: string) =>
  phoneNumberPattern.test(phone_number);

export const isValidEmail = (email: string) => emailPattern.test(email);

export const loginValidation = (loginData: TLoginForm) => {
  const error: Partial<TLoginForm> = {
    username_email: "",
    password: "",
  };

  if (!loginData.username_email) {
    error.username_email = "Enter your username or email pls";
  } else {
    delete error.username_email;
  }

  if (!loginData.password) {
    error.password = "Enter your password pls";
  } else {
    delete error.password;
  }

  return error;
};

export const regValidation = (regData: TCustomerRegister) => {
  const error: Partial<TCustomerRegister> = {
    username: "",
    email: "",
    password: "",
  };

  if (!regData.username) {
    error.username = "Choose a unique username pls";
  } else if (regData.username.length < 4) {
    error.username = "Username too short";
  } else {
    delete error.username;
  }

  if (!regData.email) {
    error.email = "Enter your email pls";
  } else if (!isValidEmail(regData.email)) {
    error.email = "Enter a valid email address";
  } else {
    delete error.email;
  }

  if (!regData.password) {
    error.password = "Enter your password pls";
  } else {
    delete error.password;
  }

  return error;
};

export const addToCartValidation = (product: TOrderItem) => {
  type TOrderItemError = {
    length?: string;
    style?: string;
    qty?: string;
  };

  const error: TOrderItemError = {
    length: "",
    style: "",
    qty: "",
  };

  if (!product.length) {
    error.length = "Choose a length";
  } else {
    delete error.length;
  }

  if (!product.style) {
    error.style = "Choose a style";
  } else {
    delete error.style;
  }

  if (!product.qty) {
    error.qty = "Select your qty";
  } else if (product.qty === 0) {
    error.qty = "Select your qty";
  } else {
    delete error.qty;
  }

  return error;
};

export const checkoutInfoValidation = (info: TCustomerInfo) => {
  const error: Partial<TCustomerInfo> = {
    first_name: "",
    last_name: "",
    phone_number: "",
    shipping_address: "",
    country: "",
    city: "",
    state: "",
    postal_code: "",
  };

  if (!info.first_name) {
    error.first_name = "enter your first name";
  } else {
    delete error.first_name;
  }

  if (!info.last_name) {
    error.last_name = "enter your last name";
  } else {
    delete error.last_name;
  }

  if (!info.shipping_address) {
    error.shipping_address = "enter your shipping address";
  } else {
    delete error.shipping_address;
  }

  if (!info.country) {
    error.country = "enter your country";
  } else {
    delete error.country;
  }

  if (!info.city) {
    error.city = "enter your city";
  } else {
    delete error.city;
  }

  if (!info.state) {
    error.state = "enter your state";
  } else {
    delete error.state;
  }

  if (!info.postal_code) {
    error.postal_code = "enter your zip/postal code";
  } else {
    delete error.postal_code;
  }

  if (!info.phone_number) {
    error.phone_number = "enter your phone_number";
  } else if (!isValidPhoneNumber(info.phone_number)) {
    error.phone_number = "your phone number is incorrect";
  } else {
    delete error.phone_number;
  }

  return error;
};
