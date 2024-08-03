import Button from "@/molecules/Button";
import Container from "@/molecules/Container";
import React from "react";

interface AccordionProps {
  label?: string;
  heading: string;
  description: string; // can use richtext
  link?: string;
  linkText?: string;
}

const Accordion = ({
  label,
  heading,
  description,
  link,
  linkText,
}: AccordionProps) => {
  return (
    <Container className="flex flex-col gap-4">
      {label && (
        <p className="font-karla font-medium uppercase tracking-widest text-amber-500">
          {label}
        </p>
      )}
      <h2 className="max-w-lg font-outfit text-5xl font-medium text-white">
        {heading}
      </h2>
      {description && (
        <p className="font-karla text-lg text-gray-300">{description}</p>
      )}
      {link && linkText && (
        <Button hierarchy={"primary"} className="mt-4 w-fit" href={link}>
          {linkText}
        </Button>
      )}
    </Container>
  );
};
export default Accordion;
