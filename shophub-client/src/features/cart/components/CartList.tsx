import CartItem from "./CartItem";

import { useCartStore } from "../store/cart.store";

function CartList() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

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
