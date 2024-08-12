"use client";

import Button from "@/molecules/Button";
import React, { useEffect, useState } from "react";
import Grid from "../Grid";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";
import Wrapper from "@/molecules/Wrapper";
import Container from "@/molecules/Container";

interface HeroProps {
  title?: string;
  description?: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  const [index, setIndex] = useState<number>(1);

  const highlight = ["business", "brand"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % highlight.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [highlight.length]);

  return (
    <Wrapper className="overflow-hidden lg:pt-36">
      <Container className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex max-w-4xl"
        >
          <H as="h1" className="text-center text-7xl font-semibold text-white">
            Building remarkable websites for your{" "}
            <motion.span className="text-gradient">
              {highlight[index]}
            </motion.span>
            <span className="text-gradient">.</span>
          </H>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paragraph className="max-w-3xl text-center text-lg text-gray-300">
            We specialize in crafting visually stunning and highly functional
            websites that elevate your brand. Experience the difference with our
            expert web solutions.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-2 flex flex-col items-center gap-8"
        >
          <Button hierarchy={"primary"} size="base">
            See our work{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </motion.div>
      </Container>
      <Grid />
      <div className="absolute -top-40 right-0 z-10 h-[480px] w-[700px] rounded-full bg-gradient-radial from-amber-500/40 via-amber-500/20 to-transparent opacity-20 blur-2xl"></div>
    </Wrapper>
  );
};
