"use client";

import { PricingCardProps } from "@/components/CardDeck/CardDeck.types";
import Button from "@/molecules/Button";
import React, { ReactNode, useState } from "react";

const PricingCard = ({
  label,
  price,
  description,
  features,
}: PricingCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      id="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animate group relative flex flex-col justify-between gap-10 rounded-xl border border-gray-500/30 bg-gradient-to-tl from-gray-500/30 to-transparent p-8 hover:-translate-y-4 hover:border-gray-500/90 hover:from-gray-500/40"
    >
      <div className="flex flex-col gap-4">
        <h4 className="font-outfit text-xl text-gray-300">{label}</h4>
        <p className="font-outfit text-4xl font-bold tracking-wider text-white">
          ${price}
        </p>
        <p className="font-karla text-lg text-gray-300">{description}</p>
        <div className="mt-2 flex flex-col gap-3">
          {features &&
            features.length > 0 &&
            features.map((item) => (
              <p
                className="flex items-center gap-2 font-karla text-lg text-gray-300"
                key={item.feature}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-amber-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.feature}
              </p>
            ))}
        </div>
      </div>
      <Button hierarchy={hovered ? "primary" : "secondary"}>
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate size-5 group-hover/link:translate-x-2"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      {/* <p className="animate group/link flex w-fit items-center gap-2 font-outfit text-lg text-white hover:text-amber-500">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate size-5 group-hover/link:translate-x-2"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </p> */}
    </div>
  );
};

export default PricingCard;
