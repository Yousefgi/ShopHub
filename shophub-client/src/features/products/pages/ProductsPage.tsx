import ProductCardSkeleton from "../../../components/product/ProductCardSkeleton";
import ProductCard from "../../../components/product/ProductCard";

import { useProducts } from "../../../hooks/useProducts";

function ProductsPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <div className="py-10 text-center text-red-600">
        Failed to load products.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
