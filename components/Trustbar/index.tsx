import React from "react";
import Image from "next/image";

const Trustbar = () => {
  return (
    <div className="padding">
      <div className="max-width flex flex-col items-center">
        <p className="font-outfit font-semibold text-black">
          Trusted by 20+ businesses
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/images/logos/adobe.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
          <Image
            src="/images/logos/framer.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
          <Image
            src="/images/logos/adobe.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
          <Image
            src="/images/logos/framer.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
          <Image
            src="/images/logos/adobe.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
          <Image
            src="/images/logos/framer.png"
            width={1000}
            height={1000}
            alt="Adobe"
            className="w-36"
          />
        </div>
      </div>
    </div>
  );
};

export default Trustbar;
