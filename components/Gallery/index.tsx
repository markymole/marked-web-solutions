"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export const Gallery = () => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
  });

  // Transform the scroll progress to a translateX value
  const translateX = useTransform(scaleY, [0, 1], [-210, -400]);

  return (
    <div className="-mt-48 w-full overflow-hidden pb-10 lg:pb-24">
      <motion.div
        id="gallery"
        className="flex gap-20"
        style={{ x: translateX }}
      >
        <div className="flex w-[500px] shrink-0 flex-col items-center justify-between gap-20">
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/babybeast.png"
            className="rounded-xl shadow-2xl"
            alt="Avatar 3"
          />
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/minindal-frameless.png"
            className="w-[340px] rounded-xl shadow-lg"
            alt="Avatar 3"
          />
        </div>
        <div className="flex w-auto shrink-0 flex-col justify-end">
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/trualert-mobile-frameless.png"
            className="h-[380px] w-auto rounded-xl object-contain shadow-2xl"
            alt="Avatar "
          />
        </div>
        <div className="w-[700px] shrink-0">
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/marked-laptop.png"
            className="h-full w-full object-contain drop-shadow-2xl"
            alt="Avatar 3"
          />
        </div>
        <div className="shrink-0">
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/translator-frameless.png"
            className="h-80 w-auto rounded-xl object-contain shadow-2xl"
            alt="Avatar 3"
          />
        </div>
        <div className="flex w-[450px] shrink-0 flex-col justify-end">
          <Image
            width={1000}
            height={1000}
            src="/images/mockups/ubiquity.png"
            className="rounded-xl object-contain shadow-2xl"
            alt="Avatar 3"
          />
        </div>
      </motion.div>
    </div>
  );
};
