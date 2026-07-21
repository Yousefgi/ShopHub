import { Eye, Pencil, Trash2 } from "lucide-react";

import Button from "../../../../components/ui/Button";
import OrderStatusBadge from "../../../orders/components/OrderStatusBadge";

import type { AdminOrder } from "../types/admin-order";

interface Props {
  order: AdminOrder;

  onView: (order: AdminOrder) => void;

  onEdit: (order: AdminOrder) => void;

  onDelete: (order: AdminOrder) => void;
}

export default function OrdersRow({ order, onView, onEdit, onDelete }: Props) {
  return (
    <tr className="border-t transition-colors hover:bg-slate-50">
      <td className="px-6 py-5 font-semibold text-slate-900">#{order.id}</td>

      <td className="px-6 py-5">
        <div className="font-medium text-slate-900">User #{order.userId}</div>
      </td>

      <td className="px-6 py-5">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-6 py-5 text-slate-600">
        {new Date(order.orderDate).toLocaleDateString()}
      </td>

      <td className="px-6 py-5 text-right font-bold text-green-600">
        ${order.totalAmount.toFixed(2)}
      </td>

      <td className="px-6 py-5">
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onView(order)}>
            <Eye size={16} />
            View
          </Button>

          <Button variant="outline" onClick={() => onEdit(order)}>
            <Pencil size={16} />
            Edit
          </Button>

          <Button variant="danger" onClick={() => onDelete(order)}>
            <Trash2 size={16} />
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
