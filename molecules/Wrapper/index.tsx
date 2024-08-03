import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={twMerge("padding relative z-10", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
