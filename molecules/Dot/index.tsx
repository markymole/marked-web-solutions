import React from "react";
import { twMerge } from "tailwind-merge";
import { DotStyles } from "./Dot.styles";

interface DotProps {
  size: "sm" | "base" | "lg";
}

export const Dot = ({ size }: DotProps) => {
  return <div className={twMerge(DotStyles({ size }))}></div>;
};
