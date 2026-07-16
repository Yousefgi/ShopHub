import { Trash2 } from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { useState } from "react";

import ConfirmDialog from "../../../components/ui/ConfirmDialog";
import QuantitySelector from "../../products/components/details/QuantitySelector";

import type { CartItem as CartItemType } from "../../../types/cart";

import placeholderImage from "../../../assets/images/placeholder.jpg";

interface CartItemProps {
  item: CartItemType;

  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="flex gap-6 p-5">
        <img
          src={item.product.imageUrl ?? placeholderImage}
          alt={item.product.name}
          className="h-28 w-28 rounded-lg object-cover"
        />

        <div className="flex flex-1 flex-col">
          <h3 className="text-lg font-semibold">{item.product.name}</h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.product.categoryName}
          </p>

          <p className="mt-4 text-lg font-bold text-blue-600">
            ${item.product.finalPrice}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <span>
              ${item.product.finalPrice.toFixed(2)} × {item.quantity}
            </span>

            <span>•</span>

            <span className="font-semibold text-slate-900">
              Total: ${(item.product.finalPrice * item.quantity).toFixed(2)}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <QuantitySelector
              quantity={item.quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />

            <Button
              variant="ghost"
              onClick={() => setOpen(true)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </Button>
          </div>
        </div>
      </Card>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="danger"
        title="Remove Product"
        description={`Are you sure you want to remove "${item.product.name}" from your cart?`}
        confirmText="Remove"
        cancelText="Cancel"
        onConfirm={() => {
          onRemove();
          setOpen(false);
        }}
      />
    </>
  );
}

export default CartItem;
