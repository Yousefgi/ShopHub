import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

import { Link } from "react-router-dom";

import type { Order } from "../types/order";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">Order #{order.id}</h3>

          <p className="text-sm text-slate-500">{order.shippingAddress}</p>

          <p className="mt-1 text-sm text-slate-500">
            {new Date(order.orderDate).toLocaleDateString()}
          </p>
        </div>

        <Badge>{order.status}</Badge>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Products</p>

          <p className="font-semibold">{order.items.length} items</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">Total</p>

          <p className="font-bold text-blue-600">
            ${order.totalAmount.toFixed(2)}
          </p>
        </div>
      </div>

      <Link to={`/orders/${order.id}`}>
        <Button className="mt-6 w-full">View Details</Button>
      </Link>
    </Card>
  );
}
