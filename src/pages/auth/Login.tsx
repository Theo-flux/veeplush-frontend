import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import AuthLayout from "../../layout/AuthLayout";
import { Link } from "react-router-dom";
import { InputText, InputPassword, Toast } from "../../components";
import { LoadingButton } from "../../components/buttons";
import { TCustomerLogin, TLoginForm } from "../../types/global";
import { loginValidation, isValidEmail } from "../../helpers/validation";
import { loginCustomer } from "../../services/auth";
import { queryClient } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<TLoginForm>({
    username_email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState<Partial<TLoginForm>>({
    username_email: "",
    password: "",
  });

  const { mutate, isLoading } = useMutation(loginCustomer, {
    onError: (error: { detail: string }) => {
      Toast.error(error?.detail);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current_customer"] });
      setTimeout(() => navigate("/"), 1000);
      Toast.success("Welcome back!");
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const error = loginValidation(loginForm);
    const payload: TCustomerLogin = {
      username: "",
      email: "",
      password: "",
    };

    if (Object.keys(error).length !== 0) {
      setLoginError(error);
    } else {
      setLoginError({});
      payload.password = loginForm.password;
      if (isValidEmail(loginForm.username_email)) {
        payload.email = loginForm.username_email;
        delete payload.username;
      } else {
        payload.username = loginForm.username_email;
        delete payload.email;
      }

      mutate(payload);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full mt-4">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[30px] font-bold">Login</h1>
          <p className="text-xs">
            New member?{" "}
            <Link
              to={{ pathname: "/register" }}
              className="underline text-purple"
            >
              Register
            </Link>
          </p>
        </div>

        <div className="mt-4">
          <InputText
            id="username_email"
            name="username_email"
            placeholder="username/email address"
            onChange={handleChange}
            error={loginError.username_email || ""}
          />

          <InputPassword
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            error={loginError.password || ""}
          />

          <LoadingButton
            isLoading={isLoading}
            className="w-full py-2 px-2 mt-4"
            text="Login"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
