import { TLoginForm } from "../types/global";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
