import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  [
    "relative z-20 inline-flex -translate-y-1 items-center gap-1 rounded-lg px-4 py-2 w-full justify-center font-outfit font-medium text-white group-active:-translate-y-0 ",
  ],
  {
    variants: {
      hierarchy: {
        primary: ["bg-amber-500"],
        secondary: [" bg-gray-500"],
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
        secondary: ["bg-gray-700"],
      },
    },
  },
);
