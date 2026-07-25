import OrderStatusBadge from "../../order/components/OrderStatusBadge";
import EmptyState from "../../../../components/ui/EmptyState";

import type { RecentOrder } from "../types/dashboard";

interface Props {
  orders: RecentOrder[];
}

export default function RecentOrdersTable({ orders }: Props) {
  if (!orders || orders.length === 0) {
    return (
      <EmptyState
        title="No Recent Orders"
        description="There are no orders available yet."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-bold text-slate-900">Latest Orders</h2>

        <p className="mt-1 text-sm text-slate-500">
          Last 5 orders placed in your store.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Order
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t transition hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-semibold">#{order.id}</td>

                <td className="px-6 py-5">{order.customerName}</td>

                <td className="px-6 py-5 text-sm text-slate-500">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>

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
  );
}