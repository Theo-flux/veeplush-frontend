import AuthLayout from "../../layout/AuthLayout";
import { Link } from "react-router-dom";
import { InputText, InputPassword } from "../../components";
import { Button } from "../../components/buttons";

const Login = () => {
  return (
    <AuthLayout>
      <div className="w-full mt-4">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[30px] font-bold">Login</h1>
          <p className="text-xs">
            New member?{" "}
            <Link to={{pathname: "/register"}} className="underline text-purple">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-4">
          <InputText
            id="username_email"
            name="username_email"
            placeholder="username/email address"
            onChange={() => {}}
          />

          <InputPassword
            id="password"
            name="password"
            placeholder="password"
            onChange={() => {}}
          />

          <Button className="w-full py-2 px-2 mt-4" text="Login"/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
