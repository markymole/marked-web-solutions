import Accordion from "@/components/Accordion";
import { CardDeck } from "@/components/CardDeck";
import ConversionPanel from "@/components/ConversionPanel";
import { Gallery } from "@/components/Gallery";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Switchback from "@/components/Switchback";
import Switcher from "@/components/Switcher";
import { CardsData, PricingData } from "@/lib/data/Cards";
import { faqItems } from "@/lib/data/FAQ";
import { switcherContent } from "@/lib/data/Switcher";

export default function Page() {
  return (
    <div className="bg-gradient-to-t from-black to-black/95">
      <Header />
      <Hero />
      <Gallery />

      <Switcher slides={switcherContent} />
      <Switchback
        type="switch"
        label="About Us"
        heading="Excellence is in Our DNA"
        description="At Marked, we pride ourselves on delivering top-notch web solutions that embody precision, creativity, and innovation. Our commitment to excellence drives us to exceed client expectations, ensuring every project we undertake is a masterpiece."
        image="/images/illustrations/website.jpg"
        link="/company/about"
        linkText="Learn more"
      />
      <Switchback
        type="default"
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
      <Accordion
        heading="Frequently asked questions"
        description="Everything you need to know about the service and billing"
        items={faqItems}
      />
      <Accordion
        layout="column"
        heading="Frequently asked questions"
        description="Everything you need to know about the service and billing"
        items={faqItems}
      />
      <ConversionPanel
        heading={"Get Started with Marked"}
        description={
          "Transform your ideas into reality with our expert web development services. Join countless satisfied clients and let us help you build a remarkable online presence. Whether you need a new website, a redesign, or ongoing support, we're here to help."
        }
        link={"/contact"}
        linkText={"Learn more"}
      />
    </div>
  );
}
