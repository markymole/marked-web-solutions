import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  richtext?: boolean;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={twMerge("font-karla", className)}>{children}</p>;
};

export default Paragraph;
