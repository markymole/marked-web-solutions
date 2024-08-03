import Button from "@/molecules/Button";
import Label from "@/molecules/Label";
import React from "react";
import { twMerge } from "tailwind-merge";
import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";

interface HeadingProps {
  className?: string;
  label?: string;
  heading: string;
  description?: string;
  link?: string;
  linkText?: string;
}

const Heading = ({
  className,
  label,
  heading,
  description,
  link,
  linkText,
}: HeadingProps) => {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      {label && <Label>{label}</Label>}
      <H as="h2" className="text-5xl font-medium text-white">
        {heading}
      </H>
      {description && (
        <Paragraph className="text-lg text-gray-300">{description}</Paragraph>
      )}
      {link && linkText && (
        <Button hierarchy={"primary"} className="mt-4 w-fit" href={link}>
          {linkText}
        </Button>
      )}
    </div>
  );
};

export default Heading;
