import { api } from "../api/axios";

export interface Category {
  id: number;
  name: string;
}


async function getCategories(): Promise<Category[]> {

  const response = await api.get<Category[]>(
    "/categories"
  );

  return response.data;

}


export const categoryService = {
  getCategories,
};