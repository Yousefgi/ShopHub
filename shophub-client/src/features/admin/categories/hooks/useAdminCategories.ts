import { useQuery } from "@tanstack/react-query";

import { adminCategoriesService } from "../services/admin-categories.service";

export function useAdminCategories() {
  return useQuery({
    queryKey: ["admin-categories"],

    queryFn: adminCategoriesService.getCategories,
  });
}