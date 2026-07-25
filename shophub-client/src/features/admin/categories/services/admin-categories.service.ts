import { api } from "../../../../api/axios";

import type {
  Category,
  CreateCategoryDto,
  UpdateCategoryDto,
} from "../types/category";

async function getCategories(): Promise<Category[]> {
  const response = await api.get<Category[]>("/categories");

  return response.data;
}

async function getCategoryById(id: number): Promise<Category> {
  const response = await api.get<Category>(`/categories/${id}`);

  return response.data;
}

async function createCategory(data: CreateCategoryDto) {
  const response = await api.post<Category>("/categories", data);

  return response.data;
}

async function updateCategory(
  id: number,
  data: UpdateCategoryDto,
) {
  const response = await api.put<Category>(
    `/categories/${id}`,
    data,
  );

  return response.data;
}

async function deleteCategory(id: number) {
  await api.delete(`/categories/${id}`);
}

export const adminCategoriesService = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};