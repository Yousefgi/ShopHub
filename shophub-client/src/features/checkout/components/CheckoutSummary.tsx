import Card from "../../../components/ui/Card";
import { useCartStore } from "../../cart/store/cart.store";
function CheckoutSummary() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium">{item.product.name}</p>

              <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
            </div>

            <span className="font-semibold">
              ${(item.product.finalPrice * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>

          <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
}

export default CheckoutSummary;
