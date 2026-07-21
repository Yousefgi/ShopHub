import { useMutation, useQueryClient } from "@tanstack/react-query";

import { adminCategoriesService } from "../services/admin-categories.service";

import type { UpdateCategoryDto } from "../types/category";


interface UpdatePayload {

  id: number;

  data: UpdateCategoryDto;

}



export function useUpdateCategory() {

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn: ({
      id,
      data,
    }: UpdatePayload) =>
      adminCategoriesService.updateCategory(
        id,
        data,
      ),


    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });

    },

  });

}