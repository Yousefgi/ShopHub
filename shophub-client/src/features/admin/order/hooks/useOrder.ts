import { useQuery,useMutation,useQueryClient  } from "@tanstack/react-query";

import { adminOrdersService } from "../services/admin-orders.service";



export function useOrder(id: number | null) {
  return useQuery({
    queryKey: ["order", id],

    queryFn: () => adminOrdersService.getOrderById(id!),

    enabled: id !== null,
  });
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adminOrdersService.deleteOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-orders"],
      });
    },
  });
}