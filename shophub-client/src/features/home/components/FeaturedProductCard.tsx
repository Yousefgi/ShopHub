import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

import placeholderImage from "../../../assets/images/placeholder.jpg";

import type { Product } from "../../../types/product";

interface Props {
  product: Product;
}

function FeaturedProductCard({ product }: Props) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.imageUrl ?? placeholderImage}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3">
            {product.discountPercentage}% OFF
          </Badge>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-xs text-slate-500">4.8</span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{product.categoryName}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-blue-600">
            ${product.finalPrice}
          </span>

          {product.discountPercentage > 0 && (
            <span className="text-sm text-slate-400 line-through">
              ${product.price}
            </span>
          )}
        </div>

        <div className="mt-5 flex gap-2">
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button className="w-full">View</Button>
          </Link>

          <Button className="flex items-center gap-2">
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
