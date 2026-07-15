import ProductCard from "../../../../components/product/ProductCard";

import { useProducts } from "../../../../hooks/useProducts";

interface RelatedProductsProps {
  brand: string;
  currentProductId: number;
}

function RelatedProducts({ brand, currentProductId }: RelatedProductsProps) {
  const { data, isLoading } = useProducts({
    brand,
    pageSize: 4,
  });

  if (isLoading || !data) return null;

  const products = data.items.filter(
    (product) => product.id !== currentProductId,
  );

  if (products.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">You May Also Like</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
