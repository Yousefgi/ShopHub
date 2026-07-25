import { X } from "lucide-react";

import Button from "../../../../components/ui/Button";
import OrderStatusBadge from "../../../orders/components/OrderStatusBadge";

import { useAdminOrderDetails } from "../hooks/useAdminOrderDetails";

interface Props {
  id: number | null;
  open: boolean;
  onClose: () => void;
}

export default function OrderDetailsModal({ id, open, onClose }: Props) {
  const { data: order, isLoading } = useAdminOrderDetails(id);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full max-w-xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-white
          p-8
          shadow-xl
        "
      >
        {isLoading ? (
          <p className="text-center">Loading order details...</p>
        ) : order ? (
          <>
            <div className="mb-6 flex justify-between">
              <h2 className="text-2xl font-bold">Order #{order.id}</h2>

              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500">User</p>

                <p className="font-semibold">#{order.userId}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>

                <OrderStatusBadge status={order.status} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Address</p>

                <p>{order.shippingAddress}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Payment</p>

                <p>{order.paymentMethod}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Total</p>

                <p className="text-xl font-bold text-green-600">
                  ${order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 font-bold">Products</h3>

              {order.items.map((item) => (
                <div
                  key={item.productId}
                  className="
                    mb-2
                    rounded-xl
                    bg-slate-50
                    p-3
                    flex
                    justify-between
                  "
                >
                  <span>{item.productName}</span>

                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
