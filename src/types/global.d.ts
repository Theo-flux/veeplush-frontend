export type TLoginForm = {
  username_email: string;
  password: string;
};

export type TCustomerLogin = {
  username?: string;
  email?: string;
  password: string;
};

export type TCustomerResponse = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string;
  city: string;
  state: string;
  postal_code: string;
  created_at: string;
  updated_at: string;
};

export type TLoginToken = {
  access_token: string;
  token_type: string;
};

export type TProducts = {
  product_category_id: number;
  image: string;
  price: number;
  style: Record<string, string>;
  name: string;
  id: number;
  description: string;
  length: Record<string, number>;
  stock_qty: number;
};
