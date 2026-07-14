import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  slug: string;
}

function CategoryCard({ title, icon, slug }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${slug}`}
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
          mb-5
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

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </Link>
  );
}

export default CategoryCard;
