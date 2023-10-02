import React, { useState } from "react";
import AuthLayout from "../../layout/AuthLayout";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { InputText, InputPassword } from "../../components";
import { LoadingButton } from "../../components/buttons";
import { TCustomerRegister } from "../../types/global";
import { regValidation } from "../../helpers/validation";
import { registerCustomer } from "../../services/auth";

const Registration = () => {
  const [regForm, setRegForm] = useState<TCustomerRegister>({
    username: "",
    email: "",
    password: "",
  });
  const [regError, setRegError] = useState<Partial<TCustomerRegister>>({});

  const { mutate, isLoading } = useMutation(registerCustomer, {
    onError: (error) => {
      console.log(error);
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegForm((prevState) => ({ ...prevState, [name]: value }));
    setRegError((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleSubmit = async () => {
    const error = regValidation(regForm);

    if (Object.values(error).length !== 0) {
      setRegError(error);
    } else {
      mutate(regForm);
    }

  };

  return (
    <AuthLayout>
      <div className="w-full mt-4">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[30px] font-bold">Register</h1>
          <p className="text-xs">
            If you have an account,{" "}
            <Link to={{ pathname: "/login" }} className="underline text-purple">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-4">
          <InputText
            id="username"
            name="username"
            placeholder="username"
            onChange={handleChange}
            error={regError.username || ""}
          />
          <InputText
            id="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            error={regError.email || ""}
          />
          <InputPassword
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            error={regError.password || ""}
          />

          <LoadingButton
            isLoading={isLoading}
            className="w-full py-2 px-2 mt-4"
            text="Register"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Registration;
