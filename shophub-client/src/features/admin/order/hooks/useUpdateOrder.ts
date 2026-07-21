import { useMutation, useQueryClient } from "@tanstack/react-query";

import { adminOrdersService } from "../services/admin-orders.service";

import type { UpdateOrderDto } from "../types/admin-order";

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: UpdateOrderDto;
    }) => adminOrdersService.updateOrder(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-orders"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard-stats"],
      });
    },
  });
}