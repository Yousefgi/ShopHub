import Card from "../ui/Card";

function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="h-52 w-full animate-pulse bg-gray-200" />

      <div className="space-y-4 p-5">
        <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />

        <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />

        <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200" />

        <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
      </div>
    </Card>
  );
}

export default ProductCardSkeleton;
