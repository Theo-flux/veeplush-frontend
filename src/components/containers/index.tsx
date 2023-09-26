import React, { FC } from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-[90%] max-w-[1100px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
