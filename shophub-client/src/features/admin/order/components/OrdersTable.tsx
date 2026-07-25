import type { AdminOrder } from "../types/admin-order";
import OrdersRow from "./OrderRow";

interface Props {
  orders: AdminOrder[];

  onView: (order: AdminOrder) => void;

  onEdit: (order: AdminOrder) => void;

  onDelete: (order: AdminOrder) => void;
}

export default function OrdersTable({
  orders,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left">
            <th className="px-6 py-4">Order</th>

            <th className="px-6 py-4">Customer</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Date</th>

            <th className="px-6 py-4 text-right">Amount</th>

            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <OrdersRow
              key={order.id}
              order={order}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
