import H from "@/molecules/Heading";
import Paragraph from "@/molecules/Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AccordionItemProps {
  index: number;
  onClick: () => void;
  open: boolean;
  title: string;
  content: string;
}

const AccordionItem = ({
  index,
  open,
  title,
  content,
  onClick,
}: AccordionItemProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "animate flex w-full justify-between gap-10 rounded-xl border border-gray-500/30 bg-gradient-to-tl from-gray-500/30 to-transparent p-8 hover:border-gray-500/90 hover:from-gray-500/40",
        open && "border-gray-500/90 from-gray-500/40",
      )}
    >
      <div className="flex flex-col gap-2 text-start">
        <H as="h6" className="text-xl font-semibold text-white">
          {title}
        </H>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Paragraph className="text-gray-300">{content}</Paragraph>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="h-fit">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default AccordionItem;
