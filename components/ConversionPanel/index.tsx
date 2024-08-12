import Button from "@/molecules/Button";
import Container from "@/molecules/Container";
import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";
import Wrapper from "@/molecules/Wrapper";
import React from "react";
import Grid from "../Grid";

interface ConversionPanelProps {
  heading: string;
  description: string;
  link: string;
  linkText: string;
}

const ConversionPanel = ({
  heading,
  description,
  link,
  linkText,
}: ConversionPanelProps) => {
  return (
    <Wrapper className="bg-black">
      <Container className="relative z-10 flex flex-col gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-gray-400/20 to-transparent p-20">
        <H as="h2" className="text-5xl font-bold text-white">
          {heading}
        </H>
        <Paragraph className="max-w-3xl text-gray-300">{description}</Paragraph>
        <Button hierarchy="primary" className="mt-4 w-fit" href={link}>
          {linkText}
        </Button>
        <div className="pointer-events-none absolute -bottom-4 right-0 opacity-5">
          <p className="inline-flex items-baseline font-outfit text-[550px]/[150px] font-extrabold text-white">
            m<span className="h-14 w-14 rounded-full bg-amber-500"></span>
          </p>
        </div>
      </Container>
      <Grid />
    </Wrapper>
  );
};

export default ConversionPanel;
