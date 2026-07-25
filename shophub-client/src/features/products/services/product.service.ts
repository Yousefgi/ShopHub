import { api } from "../../../api/axios";


import type {
  Product,
  ProductDetails,
  PaginatedResponse,
  ProductQueryParams,
  ProductFormData
} from "../../../types/product";


async function getProducts(
  params: ProductQueryParams
): Promise<PaginatedResponse<Product>> {

  const response = await api.get<PaginatedResponse<Product>>(
    "/products",
    {
      params,
    }
  );

  return response.data;
}


async function getProduct(
  id: number
): Promise<ProductDetails> {

  const response = await api.get<ProductDetails>(
    `/products/${id}`
  );

  return response.data;
}


// Delete Product
async function deleteProduct(
  id: number
): Promise<void> {

  await api.delete(`/products/${id}`);

}


// Create Product
async function createProduct(
  data: ProductFormData
): Promise<Product> {

  const response = await api.post<Product>(
    "/products",
    data
  );

  return response.data;
}


// Update Product
async function updateProduct(
  id:number,
  data:ProductFormData
):Promise<Product>{

  const response = await api.put<Product>(
    `/products/${id}`,
    data
  );

  return response.data;
}


export const productService = {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
};