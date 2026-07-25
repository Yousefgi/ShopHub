import { api } from "../../../../api/axios";
import type { DashboardStats,RecentOrder } from "../types/dashboard";

async function getDashboardStats(): Promise<DashboardStats> {
  const response = await api.get<DashboardStats>(
    "/admin/dashboard"
  );

  return response.data;
}

async function getRecentOrders() {
  const response = await api.get<RecentOrder[]>(
    "/admin/recent-orders"
  );

  return response.data;
}

export const adminService = {
  getDashboardStats,
  getRecentOrders
};