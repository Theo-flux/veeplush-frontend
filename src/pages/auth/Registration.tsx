import AuthLayout from "../../layout/AuthLayout";
import { InputText, InputPassword } from "../../components";
import { Button } from "../../components/buttons";

const Registration = () => {
  return (
    <AuthLayout>
      <div className="w-full mt-4">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[30px] font-bold">Register</h1>
          <p className="text-xs">
            If you have an account,{" "}
            <a href="/login" className="underline text-purple">
              Login
            </a>
          </p>
        </div>

        <div className="mt-4">
          <InputText
            id="username"
            name="username"
            placeholder="username"
            onChange={() => {}}
          />
          <InputText
            id="email"
            name="email"
            placeholder="email"
            onChange={() => {}}
          />
          <InputPassword
            id="password"
            name="password"
            placeholder="password"
            onChange={() => {}}
          />

          <Button className="w-full py-2 px-2 mt-4" text="Register" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Registration;
