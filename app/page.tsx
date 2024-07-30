import { CardDeck } from "@/components/CardDeck";
import { Gallery } from "@/components/Gallery";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Trustbar from "@/components/Trustbar";
import { CardsData, PricingData } from "@/data/Cards";

export default function Page() {
  return (
    <div className="bg-gradient-to-t from-black to-black/95">
      <Header />
      <Hero />
      <Gallery />

      <CardDeck
        type="Basic"
        label="Solutions"
        title={"Unmatched Expertise"}
        description="We offer tailored web solutions, transforming your vision into a digital masterpiece"
        cards={CardsData}
      />
      <CardDeck
        type="Pricing"
        label="Plans"
        title={"Affordable Packages for every budget"}
        description="Choose a plan that fits your needs, with straightforward pricing and no surprises"
        pricingCards={PricingData}
      />
    </div>
  );
}
