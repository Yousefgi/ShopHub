import Container from "../../../components/ui/Container";

import EmptyCart from "../components/EmptyCart";
import CartList from "../components/CartList";

import { useCartStore } from "../store/cart.store";
import CartSummary from "../components/CartSummary";
function CartPage() {
  const items = useCartStore((state) => state.items);

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <CartList />

          <CartSummary />
        </div>
      )}
    </Container>
  );
}

export default CartPage;
