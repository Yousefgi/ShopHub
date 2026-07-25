import { useState } from "react";
import { toast } from "sonner";

import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";

import { useUpdateOrder } from "../hooks/useUpdateOrder";

import type { OrderDetails, UpdateOrderDto } from "../types/admin-order";

interface Props {
  order: OrderDetails | null;

  open: boolean;

  onClose: () => void;
}

const statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function UpdateOrderModal({ order, open, onClose }: Props) {
  const updateMutation = useUpdateOrder();

  const [form, setForm] = useState<UpdateOrderDto>({
    shippingAddress: order?.shippingAddress ?? "",

    phoneNumber: order?.phoneNumber ?? "",

    paymentMethod: order?.paymentMethod ?? "",

    status: order?.status ?? "Pending",
  });

  if (!open || !order) {
    return null;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!order) return;

    updateMutation.mutate(
      {
        id: order.id,
        data: form,
      },
      {
        onSuccess: () => {
          toast.success("Order updated successfully");

          onClose();
        },

        onError: () => {
          toast.error("Failed to update order");
        },
      },
    );
  }
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-xl
          rounded-3xl
          bg-white
          p-8
          shadow-xl
        "
      >
        <h2 className="mb-6 text-2xl font-bold">Update Order #{order.id}</h2>

        <div className="grid gap-5">
          <Input
            label="Shipping Address"
            name="shippingAddress"
            value={form.shippingAddress}
            onChange={handleChange}
          />

          <Input
            label="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <Input
            label="Payment Method"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          />

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-700
              "
            >
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}

              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" disabled={updateMutation.isPending}>
            {updateMutation.isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}
