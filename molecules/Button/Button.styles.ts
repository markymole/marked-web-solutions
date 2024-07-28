import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  [
    "relative z-20 inline-flex -translate-y-1 items-center gap-1 rounded-lg px-4 py-2 font-outfit font-medium text-white group-active:-translate-y-0 ",
  ],
  {
    variants: {
      hierarchy: {
        primary: ["bg-amber-500"],
        secondary: ["darkmode bg-asphalt dark:bg-white"],
      },
      size: {
        sm: ["text-sm"],
        base: ["text-base"],
        lg: ["text-lg"],
      },
    },
  },
);

export const buttonbackgroundVariant = cva(
  ["absolute bottom-0 left-0 z-0 block h-full w-full rounded-lg"],
  {
    variants: {
      hierarchy: {
        primary: ["bg-amber-600"],
        secondary: ["darkmode bg-black dark:bg-gray-400"],
      },
    },
  },
);
