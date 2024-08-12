"use client";

import Container from "@/molecules/Container";
import Wrapper from "@/molecules/Wrapper";
import React, { useState } from "react";
import Heading from "../Heading";
import AccordionItem from "./AccordionItem";
import { twMerge } from "tailwind-merge";
import Grid from "../Grid";

interface AccordionProps {
  layout?: "column" | "default";
  label?: string;
  heading: string;
  description: string; // can use richtext
  link?: string;
  linkText?: string;
  items: AccordionItemProps[];
}

interface AccordionItemProps {
  title: string;
  content: string;
}

const Accordion = ({
  layout = "default",
  label,
  heading,
  description,
  link,
  linkText,
  items,
}: AccordionProps) => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Wrapper>
      <Container
        className={twMerge(
          "relative z-10",
          layout === "default"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10",
        )}
      >
        <Heading
          className={twMerge(
            layout === "default"
              ? "items-center"
              : "h-fit max-w-lg items-start lg:sticky lg:top-24",
          )}
          label={label}
          heading={heading}
          description={description}
          link={link}
          linkText={linkText}
        />
        {/* Accordion section */}
        <div
          className={twMerge(
            "mx-auto flex w-full max-w-[800px] flex-col gap-4",
            layout === "default" && "mt-10",
          )}
        >
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                content={item.content}
                title={item.title}
                open={index === active}
                onClick={() => setActive(index === active ? null : index)}
              />
            ))}
        </div>
      </Container>
      <Grid />
    </Wrapper>
  );
};
export default Accordion;
