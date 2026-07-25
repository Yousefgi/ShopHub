import { useQuery } from "@tanstack/react-query";
import { productService } from "../features/products/services/product.service";

import type { ProductQueryParams } from "../types/product";

export function useProducts(params: ProductQueryParams = {}) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productService.getProducts(params),
  });
}