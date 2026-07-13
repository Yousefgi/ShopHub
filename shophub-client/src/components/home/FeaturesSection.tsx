import { ShieldCheck, Truck, Star } from "lucide-react";

import Container from "../ui/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Truck size={30} />,
    title: "Fast Delivery",
    description:
      "Receive your orders quickly with our reliable shipping service.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Secure Payment",
    description:
      "Your payments are protected with trusted and secure transactions.",
  },
  {
    icon: <Star size={30} />,
    title: "Premium Quality",
    description: "We carefully select products to ensure the highest quality.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose ShopHub?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need for a smooth and enjoyable shopping experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
