import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface FrameProps {
  image: string;
  className?: string;
}

const Frame = ({ image, className }: FrameProps) => {
  return (
    <div className={twMerge("relative w-full", className)}>
      <div className="relative overflow-hidden shadow-2xl">
        <div className="flex h-11 flex-none items-center rounded-xl rounded-b-none bg-black px-6">
          <div className="flex space-x-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          </div>
        </div>
        <Image
          src={image}
          alt={image}
          width={1000}
          height={1000}
          className="w-full rounded-b-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Frame;
