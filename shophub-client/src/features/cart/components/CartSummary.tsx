import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/cart.store";
import { useState } from "react";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
function CartSummary() {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);
  const [open, setOpen] = useState(false);

  const handleClearCart = () => {
    clearCart();

    setOpen(false);

    toast.success("Cart cleared successfully.");
  };
  return (
    <Card className="sticky top-24 p-6">
      <h2 className="text-xl font-bold">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-600">Items</span>

          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Subtotal</span>

          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Shipping</span>

          <span className="text-green-600">Free</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>

          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={() => navigate("/checkout")}
        className="mt-8 w-full py-3"
      >
        Proceed to Checkout
      </Button>
      <Button
        variant="danger"

        onClick={() => setOpen(true)}
        className="mt-3 w-full"
      >
        <Trash2 size={18} className="mr-2" />
        Clear Cart
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Clear Shopping Cart"
        description="Are you sure you want to remove all items from your cart? This action cannot be undone."
        confirmText="Clear Cart"
        cancelText="Cancel"
        onConfirm={handleClearCart}
        variant="danger"
      />
    </Card>
  );
}

export default CartSummary;
