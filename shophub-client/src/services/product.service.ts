import { api } from "../api/axios";

import type {
  Product,
  ProductDetails,
  PaginatedResponse,
  ProductQueryParams,
} from "../types/product";

async function getProducts(
  params: ProductQueryParams
): Promise<PaginatedResponse<Product>> {
  const response = await api.get<PaginatedResponse<Product>>("/products", {
    params,
  });

  return response.data;
}

async function getProduct(id: number): Promise<ProductDetails> {
  const response = await api.get<ProductDetails>(`/products/${id}`);

  return response.data;
}

export const productService = {
  getProducts,
  getProduct,
};