import Image from "next/image";

interface SwitchbackProps {
  label?: string;
  title: string;
  description: string; // can use richtext
  link?: string;
  image: string;
}

const Switchback = ({
  label,
  title,
  description,
  link,
  image,
}: SwitchbackProps) => {
  return (
    <div className="padding">
      <div className="max-width">
        <div className="flex flex-col gap-4"></div>
        <Image src={image} alt="Marked Image" height={500} width={500} />
      </div>
    </div>
  );
};

export default Switchback;
