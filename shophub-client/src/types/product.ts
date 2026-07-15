export interface Product {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  finalPrice: number;
  imageUrl: string | null;
  categoryName: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface ProductQueryParams {
  search?: string;
  brand?: string;
  sortBy?: string;
  desc?: boolean;
  page?: number;
  pageSize?: number;
}

export interface ProductDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  finalPrice: number;
  stockQuantity: number;
  imageUrl: string | null;
  categoryName: string;
  brand: string;
}