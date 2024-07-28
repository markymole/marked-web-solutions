import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonVariant, buttonbackgroundVariant } from "./Button.styles";

type NativeButtonProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a">;

interface buttonProps extends NativeButtonProps {
  hierarchy: "primary" | "secondary";
  size?: "sm" | "base" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  hierarchy = "primary",
  size = "base",
  href,
  onClick,
  className,
  children,
  ...props
}: buttonProps) => {
  const ButtonElement = href ? "a" : "button";

  return (
    <div className={twMerge("group relative mt-1 h-fit w-fit", className)}>
      <ButtonElement
        className={twMerge(buttonVariant({ hierarchy, size }))}
        href={href}
        onClick={onClick}
        {...props}
      >
        {children}
      </ButtonElement>
      <span className={twMerge(buttonbackgroundVariant({ hierarchy }))}></span>
    </div>
  );
};

export default Button;
