import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.service";

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: adminService.getDashboardStats,
  });
}

export function useRecentOrders() {
  return useQuery({
    queryKey: ["recent-orders"],
    queryFn: adminService.getRecentOrders,
  });
}