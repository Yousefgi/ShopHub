import { useQuery } from "@tanstack/react-query";

import { adminOrdersService } from "../services/admin-orders.service";


export function useAdminOrderDetails(id?: number) {

  return useQuery({
    queryKey:["admin-order", id],

    queryFn:()=> 
      adminOrdersService.getOrderById(id!),

    enabled: !!id,
  });

}

export function useAdminOrders() {

  return useQuery({

    queryKey: ["admin-orders"],

    queryFn: adminOrdersService.getOrders,

  });

}