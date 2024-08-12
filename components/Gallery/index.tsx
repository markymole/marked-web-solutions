"use client";

import Image from "next/image";
import Frame from "@/molecules/Frame";
import Grid from "../Grid";
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <div className="relative -mt-10 w-full overflow-hidden pb-10 lg:pb-24 2xl:px-20">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/mockups/minindal-frameless.png"
            alt="Tru Alert"
            width={1000}
            height={1000}
            className="animate absolute -left-40 top-0 hidden h-80 w-full max-w-lg rounded-xl object-cover lg:block 2xl:left-8"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Frame
            image="/images/mockups/ubiquity.png"
            className="z-10 mx-auto w-full max-w-3xl pt-14"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            top: "16px",
            right: "40px",
            zIndex: "-10",
          }}
        >
          <Image
            src="/images/mockups/trualert.png"
            alt="Tru Alert"
            width={1000}
            height={1000}
            className="animate hidden w-full max-w-xl rounded-xl lg:block"
          />
        </motion.div>
      </div>
      <Grid />
    </div>
  );
};

// "use client";

// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Image from "next/image";
// import Grid from "../Grid";

// export const Gallery = () => {
//   const { scrollYProgress } = useScroll();

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });

//   const translateX = useTransform(scaleY, [0, 1], [-230, -400]);

//   return (
//     <div className="relative -mt-10 w-full overflow-hidden pb-10 lg:pb-24">
//       <motion.div
//         style={{ x: translateX }}
//         id="gallery"
//         className="relative z-10 flex gap-20"
//       >
//         <div className="flex w-[500px] shrink-0 flex-col items-center justify-between gap-20">
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/babybeast.png"
//             className="rounded-xl shadow-2xl"
//             alt="Avatar 3"
//           />
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/minindal-frameless.png"
//             className="w-[340px] rounded-xl shadow-lg"
//             alt="Avatar 3"
//           />
//         </div>
//         <div className="flex w-auto shrink-0 flex-col justify-end">
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/trualert-mobile-frameless.png"
//             className="h-[380px] w-auto rounded-xl object-contain shadow-2xl"
//             alt="Avatar "
//           />
//         </div>
//         <div className="w-[700px] shrink-0">
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/marked-laptop.png"
//             className="h-full w-full object-contain drop-shadow-2xl"
//             alt="Avatar 3"
//           />
//         </div>
//         <div className="shrink-0">
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/translator-frameless.png"
//             className="h-80 w-auto rounded-xl object-contain shadow-2xl"
//             alt="Avatar 3"
//           />
//         </div>
//         <div className="flex w-[450px] shrink-0 flex-col justify-end">
//           <Image
//             width={1000}
//             height={1000}
//             src="/images/mockups/ubiquity.png"
//             className="rounded-xl object-contain shadow-2xl"
//             alt="Avatar 3"
//           />
//         </div>
//       </motion.div>
//       <Grid />
//       <div className="absolute bottom-10 left-0 z-10 h-[300px] w-[300px] -translate-x-1/2 transform rounded-full bg-gradient-radial from-amber-500/50 via-amber-500/30 to-transparent opacity-20 blur-2xl"></div>
//     </div>
//   );
// };
