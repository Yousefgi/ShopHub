import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/product/ProductCard";
import ErrorState from "../../../components/ui/ErrorState";
import EmptyState from "../../../components/ui/EmptyState";
import { useProducts } from "../../../hooks/useProducts";
import ProductCardSkeleton from "../../../components/product/ProductCardSkeleton";

function FeaturedProducts() {
  const { data, isLoading, isError, refetch } = useProducts();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }
  if (data?.items.length === 0) {
    return (
      <section className="py-24">
        <Container>
          <EmptyState
            title="No Products Found"
            description="Categories will appear here once they are added."
          />
        </Container>
      </section>
    );
  }
  if (isError || !data) {
    return (
      <section className="py-24">
        <Container>
          <ErrorState
            description="Unable to load Products."
            onRetry={() => refetch()}
          />
        </Container>
      </section>
    );
  }

  const featuredProducts = data.items.slice(0, 3);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Products
            </h2>

            <p className="mt-3 text-slate-600">
              Explore some of our most popular products.
            </p>
          </div>

          <Link to="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
