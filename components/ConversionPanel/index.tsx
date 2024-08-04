import Button from "@/molecules/Button";
import Container from "@/molecules/Container";
import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";
import Wrapper from "@/molecules/Wrapper";
import React from "react";

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
    <Wrapper>
      <Container className="flex flex-col gap-4 rounded-2xl border border-gray-500/30 bg-gradient-to-tl from-gray-500/30 to-transparent p-14">
        <H as="h2" className="text-4xl font-bold text-white">
          {heading}
        </H>
        <Paragraph className="max-w-4xl text-gray-300">{description}</Paragraph>
        <Button hierarchy="primary" className="mt-4 w-fit" href={link}>
          {linkText}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ConversionPanel;
