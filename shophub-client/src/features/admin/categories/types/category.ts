export interface Category {
  id: number;
  name: string;
  description: string;
  productsCount: number;
}

export interface CreateCategoryDto {
  name: string;
  description: string;
}

export interface UpdateCategoryDto {
  name: string;
  description: string;
}