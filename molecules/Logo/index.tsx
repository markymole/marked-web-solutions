import Link from "next/link";
import { Dot } from "../Dot";

const Logo = () => {
  return (
    <Link
      href="/"
      id="logo"
      className="font-outfit flex items-baseline text-3xl font-semibold text-white sm:text-3xl lg:text-3xl"
    >
      m<span className="">arked</span>
      <Dot size="base" />
    </Link>
  );
};

export default Logo;
