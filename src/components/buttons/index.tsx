import { FC } from "react";
import { ClipLoader } from "react-spinners";

interface ITransparentBtnProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const TransparentBtn: FC<ITransparentBtnProps> = ({
  className,
  text,
  onClick,
}) => {
  return (
    <button
      className={`py-1 px-3 text-purple font-light text-[14px] text-center font-medium transition-all duration-500 ring-1 ring-purple ring-inset hover:bg-purple hover:text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-3 text-[14px] font-light text-center font-medium transition-all duration-500 bg-purple text-white hover:bg-veeblack hover:text-white ${className}`}
    >
      {text}
    </button>
  );
};

interface ICTABtnProps {
  disabled?: boolean;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const CTABtn: FC<ICTABtnProps> = ({
  onClick,
  className,
  text,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-3 px-4 text-white text-md text-center font-semibold transition-all duration-500 bg-purple hover:bg-white hover:text-veeblack text-xl md:text-3xl ${className}`}
    >
      {text}
    </button>
  );
};

interface ILoadingButtonProps {
  text: string;
  className?: string;
  isLoading: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LoadingButton: FC<ILoadingButtonProps> = ({
  className,
  text,
  onClick,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-3 text-[14px] font-light text-center font-medium transition-all duration-500 bg-purple text-white hover:bg-veeblack hover:text-white ${className}`}
    >
      {isLoading ? <ClipLoader size={15} color="#fff" /> : text}
    </button>
  );
};
