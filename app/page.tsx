import { CardDeck } from "@/components/CardDeck";
import { Gallery } from "@/components/Gallery";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Switchback from "@/components/Switchback";
import Switcher from "@/components/Switcher";
import Trustbar from "@/components/Trustbar";
import { CardsData, PricingData } from "@/data/Cards";
import { switcherContent } from "@/data/Switcher";

export default function Page() {
  return (
    <div className="bg-gradient-to-t from-black to-black/95">
      <Header />
      <Hero />
      <Gallery />

      <Switcher slides={switcherContent} />

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
