import { CardDeck } from "@/components/CardDeck";
import { Gallery } from "@/components/Gallery";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Switchback from "@/components/Switchback";
import Switcher from "@/components/Switcher";
import Trustbar from "@/components/Trustbar";
import { CardsData, PricingData } from "@/lib/data/Cards";
import { switcherContent } from "@/lib/data/Switcher";

export default function Page() {
  return (
    <div className="bg-gradient-to-t from-black to-black/95">
      <Header />
      <Hero />
      <Gallery />

      <Switcher slides={switcherContent} />
      <Switchback
        type={"default"}
        label="About Us"
        heading="Excellence is in Our DNA"
        description="At Marked, we pride ourselves on delivering top-notch web solutions that embody precision, creativity, and innovation. Our commitment to excellence drives us to exceed client expectations, ensuring every project we undertake is a masterpiece."
        image="/images/illustrations/website.jpg"
        link="/company/about"
        linkText="Learn more"
      />
      <Switchback
        type="switch"
        label="Innovation"
        heading="Innovation at the Core"
        description="At Marked, we are not just about following trends; we set them. Our team constantly explores new technologies and creative approaches to provide innovative solutions that make your brand stand out. From cutting-edge designs to seamless functionality, we push the boundaries of what's possible."
        image="/images/illustrations/website.jpg"
        link="/services/innovation"
        linkText="Explore our innovations"
      />
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
