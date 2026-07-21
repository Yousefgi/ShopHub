import { useMutation, useQueryClient } from "@tanstack/react-query";

import { adminCategoriesService } from "../services/admin-categories.service";

import type { CreateCategoryDto } from "../types/category";


export function useCreateCategory() {

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn: (data: CreateCategoryDto) =>
      adminCategoriesService.createCategory(data),


    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });

    },

  });

}