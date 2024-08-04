"use client";

import Container from "@/molecules/Container";
import Wrapper from "@/molecules/Wrapper";
import React, { useState } from "react";
import Heading from "../Heading";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
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
      <Container className="flex flex-col gap-4">
        <Heading
          className="items-center"
          label={label}
          heading={heading}
          description={description}
          link={link}
          linkText={linkText}
        />
        {/* Accordion section */}
        <div className="mx-auto mt-10 flex w-[800px] flex-col gap-4">
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
    </Wrapper>
  );
};
export default Accordion;
