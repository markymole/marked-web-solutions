import React, { ReactNode } from "react";
import Grid from "../Grid";
import { twMerge } from "tailwind-merge";
import BasicCard from "@/molecules/Cards/Basic";
import type { CardProps, PricingCardProps } from "./CardDeck.types";
import PricingCard from "@/molecules/Cards/Pricing";
import Container from "@/molecules/Container";
import Wrapper from "@/molecules/Wrapper";

interface CardDeckProps {
  type: "Basic" | "Pricing";
  label?: string;
  title: string;
  description?: string;
  cards?: CardProps[];
  pricingCards?: PricingCardProps[];
}

export const CardDeck = ({
  type,
  label,
  title,
  description,
  cards,
  pricingCards,
}: CardDeckProps) => {
  return (
    <Wrapper className="overflow-hidden">
      <Container>
        <div className="flex flex-col gap-4">
          {label && (
            <p className="font-karla font-medium uppercase tracking-widest text-amber-500">
              {label}
            </p>
          )}
          {title && (
            <h2 className="max-w-lg font-outfit text-5xl font-medium text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-karla text-lg text-gray-300">{description}</p>
          )}
        </div>
        <div
          id="cards-container"
          className={twMerge("mt-10 grid grid-cols-3 gap-x-6 gap-y-8")}
        >
          {/* Basic card deck type */}
          {cards &&
            cards.length > 0 &&
            type === "Basic" &&
            cards.map((card) => (
              <BasicCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={""}
              />
            ))}

          {/* Pricing card deck type */}
          {pricingCards &&
            pricingCards.length > 0 &&
            type === "Pricing" &&
            pricingCards.map((pricingCard) => (
              <PricingCard
                key={pricingCard.label}
                label={pricingCard.label}
                link={pricingCard.link}
                price={pricingCard.price}
                description={pricingCard.description}
                features={pricingCard.features}
              />
            ))}
        </div>
      </Container>
      <Grid />
      <div
        className={twMerge(
          "absolute z-0 h-[500px] w-[500px] transform rounded-full bg-gradient-radial from-amber-500/40 to-transparent opacity-20 blur-2xl",
          type === "Basic" ? "-right-52 bottom-24" : "-left-52 top-0",
        )}
      ></div>
    </Wrapper>
  );
};
