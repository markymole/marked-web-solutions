import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const H = ({ children, className, as = "h2" }: HeadingProps) => {
  const H = as || "h2";

  return <H className={twMerge("font-outfit", className)}>{children}</H>;
};

export default H;
