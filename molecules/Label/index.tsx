import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className }: LabelProps) => {
  return (
    <p
      className={twMerge(
        "font-karla font-medium uppercase tracking-widest text-amber-500",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Label;
