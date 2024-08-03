"use client";

import React, { ReactNode, useState } from "react";
import Grid from "../Grid";
import Button from "@/molecules/Button";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";
import Label from "@/molecules/Label";
import Container from "@/molecules/Container";
import Wrapper from "@/molecules/Wrapper";

interface SwitcherProps {
  slides: SlideProps[];
}

interface SlideProps {
  heading: string;
  description: string;
  link?: string;
  linkText?: string;
  switcherIcon: ReactNode; // update to globalized icon
  switcherTitle: string;
  switcherDescription: string;
}

const Switcher = ({ slides }: SwitcherProps) => {
  const [active, setActive] = useState<number>(0);

  return (
    <Wrapper className="overflow-hidden">
      <Container className="relative z-10 grid grid-cols-2 gap-14">
        <AnimatePresence mode="wait" initial={true}>
          {slides &&
            slides.length > 0 &&
            slides.map((slide, index) => {
              return (
                index === active && (
                  <motion.div
                    key={Math.random()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={twMerge("flex shrink flex-col gap-4")}
                  >
                    {slide.switcherTitle && (
                      <Label>{slide.switcherTitle}</Label>
                    )}
                    <H as="h2" className="text-5xl font-medium text-white">
                      {slide.heading}
                    </H>
                    <Paragraph className="text-lg text-gray-300">
                      {slide.description}
                    </Paragraph>
                    <Button
                      hierarchy={"primary"}
                      className="mt-4 w-fit"
                      href={slide.link}
                    >
                      {slide.linkText}
                    </Button>
                  </motion.div>
                )
              );
            })}
        </AnimatePresence>

        {slides && slides.length > 0 && (
          <div className="flex flex-col gap-4">
            {slides.map((slide, index) => (
              <button
                onClick={() => setActive(index)}
                className={twMerge(
                  "animate flex w-auto items-center gap-6 rounded-xl border px-8 py-4",
                  index === active
                    ? "border-gray-500/30 bg-gradient-to-l from-gray-500/30 to-transparent"
                    : "border-transparent",
                )}
                key={Math.random()}
              >
                <div className="text-amber-500">{slide.switcherIcon}</div>
                <div className="text-start">
                  <H as="h6" className="text-lg font-semibold text-white">
                    {slide.switcherTitle}
                  </H>

                  <Paragraph className="text-gray-300">
                    {slide.switcherDescription}
                  </Paragraph>
                </div>
              </button>
            ))}
          </div>
        )}
      </Container>
      <Grid />
    </Wrapper>
  );
};

export default Switcher;
