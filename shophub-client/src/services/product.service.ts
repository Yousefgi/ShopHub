import { api } from '../api/axios';

import type { Product,PaginatedResponse } from '../types/product';


export const productService = {
  getProducts: async (): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>('/products');

    return response.data;
  },
};