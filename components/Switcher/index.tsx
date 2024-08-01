"use client";

import React, { ReactNode, useState } from "react";
import Grid from "../Grid";
import Button from "@/molecules/Button";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

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
    <motion.div className="padding relative">
      <div className="max-width relative z-10 grid grid-cols-2 gap-14">
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
                      <p className="font-karla font-medium uppercase tracking-widest text-amber-500">
                        {slide.switcherTitle}
                      </p>
                    )}
                    <h2 className="max-w-lg font-outfit text-5xl font-medium text-white">
                      {slide.heading}
                    </h2>
                    <p className="font-karla text-lg text-gray-300">
                      {slide.description}
                    </p>
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
                  "flex w-auto items-center gap-6 rounded-xl px-8 py-4",
                  index === active &&
                    "border border-gray-500/30 bg-gradient-to-l from-gray-500/30 to-transparent",
                )}
                key={Math.random()}
              >
                <div className="text-amber-500">{slide.switcherIcon}</div>
                <div className="text-start">
                  <h6 className="font-outfit text-lg font-semibold text-white">
                    {slide.switcherTitle}
                  </h6>
                  <p className="font-karla text-gray-300">
                    {slide.switcherDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <Grid />
    </motion.div>
  );
};

export default Switcher;
