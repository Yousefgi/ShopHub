import { useState } from "react";

import Button from "../../../../components/ui/Button";

import QuantitySelector from "./QuantitySelector";

import type { ProductDetails } from "../../../../types/product";
import Badge from "../../../../components/ui/Badge";

import { ShoppingCart } from "lucide-react";
import { Star } from "lucide-react";

interface ProductInfoProps {
  product: ProductDetails;
}

function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        {product.name}
      </h1>
      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

        <span className="ml-2 text-sm text-slate-500">(4.8)</span>
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between border-b border-slate-200 py-3">
          <span className="text-slate-500">Category</span>

          <span className="font-semibold text-slate-900">
            {product.categoryName}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-slate-200 py-3">
          <span className="text-slate-500">Brand</span>

          <span className="font-semibold text-slate-900">{product.brand}</span>
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-slate-500">Availability</span>

          <Badge>
            {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>
      <div className="mt-8 rounded-2xl bg-blue-50 p-6">
        <div className="mt-8 flex items-center gap-4">
          <span className="text-4xl font-bold text-blue-600">
            ${product.finalPrice}
          </span>

          {product.discountPercentage > 0 && (
            <>
              <span className="text-xl text-slate-400 line-through">
                ${product.price}
              </span>
              <Badge>{product.discountPercentage}% OFF</Badge>
            </>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Description
        </h2>

        <p className="leading-8 text-slate-600">{product.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Quantity</h2>

        <QuantitySelector
          quantity={quantity}
          onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          onIncrease={() => setQuantity((q) => q + 1)}
        />
      </div>
      <p className="mt-4 text-sm text-slate-500">
        {product.stockQuantity} items available
      </p>
      <Button className="mt-8 flex w-full items-center justify-center gap-2 py-4 text-lg">
        <ShoppingCart size={18} />
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductInfo;
