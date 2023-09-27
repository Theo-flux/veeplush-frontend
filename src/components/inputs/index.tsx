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

interface ISelectInput {
  id: string;
  label: string;
  placeholder: string;
  options: Array<number | string>;
}

export const SelectInput = ({
  id,
  label,
  placeholder,
  options,
}: ISelectInput) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        className="bg-transparent border border-grey text-grey text-sm focus:ring-purple focus:border-purple block w-full p-2"
      >
        <option selected>{placeholder}</option>
        {options.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

interface IInputNumber {
  id: string;
  label: string;
  placeholder: string;
  min: number;
  max: number;
  name: string;
  onChange: () => void;
}

export const InputNumber = ({
  id,
  label,
  placeholder,
  min,
  max,
  name,
  onChange,
}: IInputNumber) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        name={name}
        className="bg-transparent border border-grey text-grey text-sm focus:ring-purple focus:border-purple block w-full p-2"
        onChange={onChange}
      />
    </div>
  );
};



interface IInputFilterProps {
  id: string;
  label: string;
  options: Array<number | string>;
}

export const InputFilter = ({
  id,
  label,
  options,
}: IInputFilterProps) => {
  return (
    <div className="flex justify-start items-center w-full mr-2">
      <label htmlFor={id} className="block text-sm font-medium mr-1">
        {label}
      </label>
      <select
        id={id}
        className="bg-white text-black text-sm block w-full py-[0.5px] px-1"
      >
        {options.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};