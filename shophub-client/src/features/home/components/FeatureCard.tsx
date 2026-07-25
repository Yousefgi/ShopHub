import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      <div
        className="
          mx-auto
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-blue-100
          text-blue-600
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
