import Button from "@/molecules/Button";
import React from "react";

export const Hero = () => {
  return (
    <div className="padding bg-gradient-to-t from-black to-black/95 lg:pb-60">
      <div className="max-w-8xl mx-auto flex flex-col items-center gap-6">
        <div className="flex max-w-4xl">
          <h1 className="font-outfit text-center text-7xl font-semibold text-white">
            We develop <span className="text-gradient"> amazing</span> websites
            for your business<span className="text-gradient">.</span>
          </h1>
        </div>
        <p className="font-karla max-w-3xl text-center text-lg text-gray-300">
          We work closely with you to bring your ideas to life, crafting
          websites that reflect your brand identity. Achieve your online goals
          with our customized web solutions.
        </p>

        <div className="mt-2 flex flex-col items-center gap-8">
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
        </div>
      </div>
    </div>
  );
};
