import { useQuery } from "@tanstack/react-query";

import { productService } from "../../../services/product.service";

function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: productService.getProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      <h1>Products</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ProductsPage;
