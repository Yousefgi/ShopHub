import CartItem from "./CartItem";
import Card from "../../../components/ui/Card";
import { useCartStore } from "../store/cart.store";

function CartList() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (items.length === 0) {
    return (
      <Card className="p-10 text-center">
        <h2 className="text-xl font-semibold text-slate-900">
          Your cart is empty
        </h2>

        <p className="mt-2 text-slate-500">
          Start shopping and add products to your cart.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.product.id}
          item={item}
          onIncrease={() => increaseQuantity(item.product.id)}
          onDecrease={() => decreaseQuantity(item.product.id)}
          onRemove={() => removeFromCart(item.product.id)}
        />
      ))}
    </div>
  );
}

export default CartList;
