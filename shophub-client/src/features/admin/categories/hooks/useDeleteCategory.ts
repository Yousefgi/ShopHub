import { useMutation, useQueryClient } from "@tanstack/react-query";

import { adminCategoriesService } from "../services/admin-categories.service";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      adminCategoriesService.deleteCategory(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },
  });
}