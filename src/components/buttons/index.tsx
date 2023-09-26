import { FC } from "react";
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
      className={`py-1 px-3 text-[14px] font-light text-center font-medium transition-all duration-500 bg-purple text-white hover:bg-white hover:text-purple ${className}`}
    >
      {text}
    </button>
  );
};
