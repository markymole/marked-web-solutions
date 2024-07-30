import { CardProps } from "@/components/CardDeck/CardDeck.types";
import React, { ReactNode } from "react";

const BasicCard = ({ title, icon, description, link }: CardProps) => {
  return (
    <div
      id="card"
      className="animate group relative flex flex-col justify-between gap-10 rounded-xl border border-gray-500/30 bg-gradient-to-l from-gray-500/30 to-transparent p-8 hover:-translate-y-2 hover:border-gray-500/90 hover:from-gray-500/40"
    >
      <div className="flex flex-col gap-4">
        <div className="animate w-fit rounded-lg bg-white/20 p-4 group-hover:bg-amber-500/90">
          <div className="animate size-10 text-amber-500/90 group-hover:text-white">
            {icon}
          </div>
        </div>
        <h4 className="font-outfit text-xl font-semibold text-white">
          {title}
        </h4>
        <p className="font-karla text-lg text-gray-300">{description}</p>
      </div>
      <p className="animate flex w-fit items-center gap-2 font-outfit text-lg text-white group-hover:text-amber-500">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate size-5 group-hover:translate-x-2"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  );
};

export default BasicCard;
