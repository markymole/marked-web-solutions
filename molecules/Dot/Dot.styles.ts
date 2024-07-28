import { cva } from "class-variance-authority";

export const DotStyles = cva(
  ["ml-0.5 flex shrink-0 rounded-full bg-amber-500"],
  {
    variants: {
      size: {
        sm: ["h-1.5 w-1.5"],
        base: [" h-2 w-2"],
        lg: [" h-3 w-3"],
      },
    },
  },
);
