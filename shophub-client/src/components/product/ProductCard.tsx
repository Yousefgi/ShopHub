import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

import type { Product } from "../../types/product";
import placeholderImage from "../../assets/images/placeholder.jpg";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={product.imageUrl || placeholderImage}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = placeholderImage;
          }}
        />
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-semibold text-gray-900">
            {product.name}
          </h2>

          <Badge className="mt-2">{product.categoryName}</Badge>
        </div>

        <div>
          <p className="text-sm text-gray-400 line-through">${product.price}</p>

          <p className="text-3xl font-bold text-blue-600">
            ${product.finalPrice}
          </p>
        </div>

        {product.discountPercentage > 0 && (
          <Badge className="bg-red-50 text-red-600 ring-1 ring-red-200">
            {product.discountPercentage}% OFF
          </Badge>
        )}
        <Link to={`/products/${product.id}`}>
          <Button className="mt-auto w-full rounded-xl transition-all duration-300">
            View Product
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default ProductCard;
