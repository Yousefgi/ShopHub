import { api } from '../api/axios';

import type { Product,PaginatedResponse,ProductQueryParams } from '../types/product';


export const productService = {
  getProducts: async (
    params: ProductQueryParams
  ): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>("/products", {
      params,
    });

    return response.data;
  },
};