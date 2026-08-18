export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Junior Membership",
    price: "£35",
    period: "/month",
    description: "Unlimited junior classes.",
  },
  {
    name: "Adult Membership",
    price: "£60",
    period: "/month",
    description: "Unlimited classes.",
    popular: true,
  },
  {
    name: "Personal Training",
    price: "£40",
    period: "/hour",
    description: "£35 per hour for members.",
  },
];
