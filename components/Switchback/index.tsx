import Button from "@/molecules/Button";
import Container from "@/molecules/Container";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Heading from "../Heading";
import Wrapper from "@/molecules/Wrapper";
import Grid from "../Grid";

interface SwitchbackProps {
  type: "default" | "switch";
  label?: string;
  heading: string;
  description: string; // can use richtext
  link?: string;
  linkText?: string;
  image: string;
}

const Switchback = ({
  type,
  label,
  heading,
  description,
  link,
  linkText,
  image,
}: SwitchbackProps) => {
  return (
    <Wrapper className="">
      <Container className="relative z-10 grid grid-cols-2 gap-14">
        <Heading
          heading={heading}
          label={label}
          description={description}
          link={link}
          linkText={linkText}
          className="sticky top-24 h-fit"
        />
        <Image
          src={image}
          alt="Marked Image"
          height={500}
          width={500}
          className={twMerge(
            "aspect-square w-full rounded-xl object-cover",
            type === "switch" && "order-first",
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default Switchback;
