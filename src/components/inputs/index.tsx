import { useState } from "react";
import { TbEyeOff, TbEye } from "react-icons/tb";

interface IInputProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: () => void;
  error?: string;
}

export const InputText = ({
  id,
  name,
  placeholder,
  error,
  onChange,
}: IInputProps) => {
  return (
    <div className="w-full mb-4">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={`border-0 w-full ring-1 ring-grey ${
          error ? "ring-error" : ""
        } px-3 py-2 focus:outline fous:outline-[1px] focus:outline-purple mb-1`}
      />
      <small>{error}</small>
    </div>
  );
};

export const InputPassword = ({
  id,
  name,
  placeholder,
  error,
  onChange,
}: IInputProps) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex flex-col w-full mb-4">
      <div
        className={`w-full flex items-center ring-1 ring-grey ${
          error ? "ring-error" : ""
        } px-3 py-2 focus:outline focus:outline-1 focus:outline-purple mb-1`}
      >
        <input
          id={id}
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          className="focus:outline-none w-full peer "
          onChange={onChange}
        />

        <div className="cursor-pointer" onClick={() => setShowPass(!showPass)}>
          {showPass ? <TbEye /> : <TbEyeOff />}
        </div>
      </div>

      {error && <small className="text-error">{error}</small>}
    </div>
  );
};
