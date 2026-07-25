export interface DashboardStats {
  productsCount: number;
  ordersCount: number;
  usersCount: number;
  totalRevenue: number;
}

export interface RecentOrder {
  id: number;
  customerName: string;
  totalAmount: number;
  orderDate: string;
  status: string;
}