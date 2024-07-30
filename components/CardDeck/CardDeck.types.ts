import { ReactNode } from "react";

export interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface PricingCardProps {
  label: string;
  price: string;
  description: string;
  features: featuresProps[];
  link: string;
}

export interface featuresProps {
  feature: string;
}
