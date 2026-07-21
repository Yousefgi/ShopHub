import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";
import { useDashboardStats, useRecentOrders } from "../hooks/useDashboardStats";
import StatsCard from "../components/StatsCard";
import OrderStatusBadge from "../../order/components/OrderStatusBadge";
export default function DashboardPage() {
  const { data, isLoading } = useDashboardStats();
  const { data: recentOrders } = useRecentOrders();
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          Overview of your store performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Products"
          value={data?.productsCount ?? 0}
          icon={Package}
          color="blue"
        />

        <StatsCard
          title="Orders"
          value={data?.ordersCount ?? 0}
          icon={ShoppingCart}
          color="green"
        />

        <StatsCard
          title="Users"
          value={data?.usersCount ?? 0}
          icon={Users}
          color="purple"
        />

        <StatsCard
          title="Revenue"
          value={`$${(data?.totalRevenue ?? 0).toFixed(2)}`}
          icon={DollarSign}
          color="orange"
        />
      </div>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold">Recent Orders</h2>

        <div className="mt-10 rounded-3xl bg-white shadow-sm">
          <div className="border-b p-6">
            <h2 className="text-xl font-bold text-slate-900">Latest Orders</h2>

            <p className="mt-1 text-sm text-slate-500">
              Last 5 orders placed in your store.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left">Order</th>
                  <th className="px-6 py-4 text-left">Customer</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders?.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-5 font-semibold">#{order.id}</td>

                    <td className="px-6 py-5">{order.customerName}</td>

                    <td className="px-6 py-5">
                      <OrderStatusBadge status={order.status} />
                    </td>

                    <td className="px-6 py-5 text-right font-bold text-green-600">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
