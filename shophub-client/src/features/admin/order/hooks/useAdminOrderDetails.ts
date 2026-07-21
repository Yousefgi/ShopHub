import { useQuery } from "@tanstack/react-query";
import { adminOrdersService } from "../services/admin-orders.service";


export function useAdminOrderDetails(id: number | null) {
  return useQuery({
    queryKey: ["admin-order-details", id],

    queryFn: () =>
      adminOrdersService.getOrderById(id!),

    enabled: !!id,
  });
}