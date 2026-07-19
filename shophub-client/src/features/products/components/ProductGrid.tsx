import ProductCard from "../../../components/product/ProductCard";
import ProductCardSkeleton from "../../../components/product/ProductCardSkeleton";

import ErrorState from "../../../components/ui/ErrorState";
import EmptyState from "../../../components/ui/EmptyState";
import Pagination from "../components/Pagination";

import { useProducts } from "../../../hooks/useProducts";

interface ProductGridProps {
  search: string;
  category: string;
  sortBy: string;
  desc: boolean;

  page: number;
  onPageChange: (page: number) => void;
}

function ProductGrid({
  search,
  category,
  sortBy,
  desc,
  page,
  onPageChange,
}: ProductGridProps) {
  const { data, isLoading, isError, refetch } = useProducts({
    search,
    category,
    sortBy,
    desc,
    page,
    pageSize: 9,
  });
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        description="Unable to load products."
        onRetry={() => refetch()}
      />
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <EmptyState
        title="No Products Found"
        description="Products will appear here once they are added."
      />
    );
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {data.items.length} of {data.totalCount} products
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {data.totalPages > 1 && (
        <Pagination
          currentPage={data.page}
          totalPages={data.totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default ProductGrid;
