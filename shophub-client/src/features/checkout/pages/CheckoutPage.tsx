import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../../components/ui/Container";

import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";

import { useCreateOrder } from "../hooks/useCreateOrder";
import { useCartStore } from "../../cart/store/cart.store";

import { toast } from "sonner";

function CheckoutPage() {
  const navigate = useNavigate();

  const { mutate, isPending } = useCreateOrder();

  const items = useCartStore((state) => state.items);

  const clearCart = useCartStore((state) => state.clearCart);

  const [shippingAddress, setShippingAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const handleSubmit = () => {
    const orderData = {
      shippingAddress,

      phoneNumber,

      paymentMethod,

      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    };

    mutate(orderData, {
      onSuccess: (data) => {
        toast.success("Order created successfully");

        clearCart();

        navigate(`/orders/${data.id}`);
      },

      onError: () => {
        toast.error("Failed to create order");
      },
    });
  };

  return (
    <section className="py-10">
      <Container>
        <h1 className="mb-8 text-3xl font-extrabold">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm
              shippingAddress={shippingAddress}

              phoneNumber={phoneNumber}

              paymentMethod={paymentMethod}

              onAddressChange={setShippingAddress}

              onPhoneChange={setPhoneNumber}

              onPaymentChange={setPaymentMethod}

              onSubmit={handleSubmit}

              isLoading={isPending}
            />
          </div>

          <CheckoutSummary />
        </div>
      </Container>
    </section>
  );
}

export default CheckoutPage;
